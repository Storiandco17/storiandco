import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://stori-landing.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert "Stori" in r.json().get("message", "")


def test_create_contact_and_persist(client):
    payload = {
        "name": "TEST_Alice",
        "brand": "TEST_Brand",
        "email": "test_alice@example.com",
        "revenue_goal": "$50K — $250K",
        "services": ["Branding", "Paid Ads"],
        "message": "TEST entry",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == "TEST_Alice"
    assert data["brand"] == "TEST_Brand"
    assert data["revenue_goal"] == "$50K — $250K"
    assert "id" in data and len(data["id"]) > 0

    # GET to verify persistence
    r2 = client.get(f"{API}/contact")
    assert r2.status_code == 200
    items = r2.json()
    assert any(i["id"] == data["id"] for i in items)


def test_create_contact_invalid_email(client):
    payload = {
        "name": "x", "brand": "y", "email": "not-an-email",
        "revenue_goal": "Starting Out", "services": [], "message": ""
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422


def test_create_contact_missing_field(client):
    payload = {"name": "", "brand": "y", "email": "a@b.co", "revenue_goal": "Starting Out"}
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422

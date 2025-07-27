from fastapi import FastAPI, status
from typing import List
from PickEvent import PickEvent
from PickEventRequest import PickEventRequest
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

EVENTS_LIST: List[PickEvent] = []
MAX_EVENTS = 10


@app.post("/pick", status_code=status.HTTP_201_CREATED)
async def log_pick_event(event: PickEventRequest):
    new_event = insert_new_event(event)

    return {"message": "Pick event logged successfully", "event": new_event}

def insert_new_event(event):
    new_event = PickEvent(robot_id=event.robot_id, item_id=event.item_id)
    
    EVENTS_LIST.append(new_event)
    
    if len(EVENTS_LIST) > MAX_EVENTS:
        EVENTS_LIST.pop(0)
    return new_event

@app.get("/events")
async def get_pick_events():
    return {"events": EVENTS_LIST}


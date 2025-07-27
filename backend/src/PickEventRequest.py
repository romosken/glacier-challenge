from pydantic import BaseModel


class PickEventRequest(BaseModel):
    robot_id: str
    item_id: str
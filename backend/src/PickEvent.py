from datetime import datetime
from pydantic import BaseModel

class PickEvent(BaseModel):
    robot_id: str
    item_id: str
    timestamp: str = datetime.now().isoformat()

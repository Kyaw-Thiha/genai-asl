from fastapi.openapi.utils import get_openapi
from main import app
import json

# https://github.com/fastapi/fastapi/issues/1173

# openapi_schema = (
#     get_openapi(
#         title=app.title,
#         version=app.version,
#         openapi_version=app.openapi_version,
#         description=app.description,
#         routes=app.routes,
#         # openapi_prefix=app.openapi_prefix,
#     ),
# )
#
# openapi_schema["servers"] = [
#     {"url": "http://127.0.0.1:8000", "description": "Local Development Server"},
#     {"url": "https://yourdomain.com", "description": "Production Server"},
# ]


def generate_openapi_schema():
    """
    Generate the OpenAPI schema for the FastAPI application.
    """
    return get_openapi(
        title="My API",
        version="1.0.0",
        description="This is my API description",
        routes=app.routes,
    )


# openapi_schema = app.openapi()
openapi_schema = generate_openapi_schema()


# old_path = openapi.json
path = "../../frontend/src/lib/schema.json"
with open(path, "w") as f:
    json.dump(openapi_schema, f, indent=2)

print("OpenAPI schema saved to ", path)

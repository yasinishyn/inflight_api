# Get all Flights

**URL** : `/flights`

**Method** : `GET`

**Request Data example** : N/A

**Success Response**

```json
{
  "status": "success",
  "data": [
    {
      "status": "SCHEDULED",
      "_id": "60269e4c25ecc4c80e0aa91c",
      "flightCode": "ABC",
      "flightProvider": "ABC Provider",
      "sourcePortName": "ABC Port",
      "sourcePortCode": "ABCCODE",
      "destinationPortName": "ABC Destination",
      "destinationPortCode": "ABCPC",
      "scheduledArrival": "2021-02-12T15:13:35.641Z",
      "scheduledDeparture": "2021-02-12T15:13:35.641Z",
      "terminal": "ABCT",
      "createdAt": "2021-02-12T15:27:08.640Z",
      "updatedAt": "2021-02-12T15:27:08.640Z",
      "__v": 0
    },
    {
      "status": "SCHEDULED",
      "_id": "60269eb425ecc4c80e0aa91d",
      "flightCode": "XYZ",
      "flightProvider": "XYZ Provider",
      "sourcePortName": "XYZ Port",
      "sourcePortCode": "XYZCODE",
      "destinationPortName": "XYZ Destination",
      "destinationPortCode": "XYZPC",
      "scheduledArrival": "2021-02-12T15:13:35.641Z",
      "scheduledDeparture": "2021-02-12T15:13:35.641Z",
      "terminal": "XYZT",
      "createdAt": "2021-02-12T15:28:52.948Z",
      "updatedAt": "2021-02-12T15:28:52.948Z",
      "__v": 0
    },
    {
      "status": "SCHEDULED",
      "_id": "60269eb925ecc4c80e0aa91e",
      "flightProvider": "XYZ Provider",
      "sourcePortName": "XYZ Port",
      "sourcePortCode": "XYZCODE",
      "destinationPortName": "XYZ Destination",
      "destinationPortCode": "XYZPC",
      "scheduledArrival": "2021-02-12T15:13:35.641Z",
      "scheduledDeparture": "2021-02-12T15:13:35.641Z",
      "terminal": "XYZT",
      "createdAt": "2021-02-12T15:28:57.792Z",
      "updatedAt": "2021-02-12T15:28:57.792Z",
      "__v": 0
    },
    {
      "status": "SCHEDULED",
      "_id": "6026a114c87152c9e9a3883d",
      "flightCode": "XYZ",
      "flightProvider": "XYZ Provider",
      "sourcePortName": "XYZ Port",
      "sourcePortCode": "XYZCODE",
      "destinationPortName": "XYZ Destination",
      "destinationPortCode": "XYZPC",
      "scheduledArrival": "2021-02-12T15:13:35.641Z",
      "scheduledDeparture": "2021-02-12T15:13:35.641Z",
      "terminal": "XYZT",
      "createdAt": "2021-02-12T15:39:00.643Z",
      "updatedAt": "2021-02-12T15:39:00.643Z",
      "__v": 0
    }
  ]
}
```

# Create a new Flight record

**URL** : `/flights`

**Method** : `POST`

**Request Data example** :

```json
{
	"flightParams": {
		"flightCode": "XYZ",
		"flightProvider": "XYZ Provider",
		"sourcePortName": "XYZ Port",
		"sourcePortCode": "XYZCODE",
		"destinationPortName": "XYZ Destination",
		"destinationPortCode": "ABCPC",
		"scheduledArrival": "2021-02-12T15:13:35.641Z",
		"scheduledDeparture": "2021-02-12T15:13:35.641Z",
		"terminal": "ABCT",
		"status": "SCHEDULED"
	}
}
```

**Success Response** :

```json
{
  "status": "success",
  "data": {
    "status": "LANDED",
    "_id": "60269e4c25ecc4c80e0aa91c",
    "flightCode": "",
    "flightProvider": "",
    "sourcePortName": "ABC Port",
    "sourcePortCode": "ABCCODE",
    "destinationPortName": "XYZ Destination",
    "destinationPortCode": "",
    "scheduledArrival": "2021-02-12T15:13:35.641Z",
    "scheduledDeparture": "2021-02-12T15:13:35.641Z",
    "terminal": "AAAAA",
    "createdAt": "2021-02-12T15:27:08.640Z",
    "updatedAt": "2021-02-12T16:08:28.015Z",
    "__v": 0
  }
}
```

**Validation error** :

```json
{
  "status": 400,
  "data": {
    "error": {
      "errors": {
        "destinationPortName": {
          "name": "ValidatorError",
          "message": "Path `destinationPortName` is required.",
          "properties": {
            "message": "Path `destinationPortName` is required.",
            "type": "required",
            "path": "destinationPortName"
          },
          "kind": "required",
          "path": "destinationPortName"
        },
        "sourcePortName": {
          "name": "ValidatorError",
          "message": "Path `sourcePortName` is required.",
          "properties": {
            "message": "Path `sourcePortName` is required.",
            "type": "required",
            "path": "sourcePortName"
          },
          "kind": "required",
          "path": "sourcePortName"
        }
      },
      "_message": "Flight validation failed",
      "name": "ValidationError",
      "message": "Flight validation failed: destinationPortName: Path `destinationPortName` is required., sourcePortName: Path `sourcePortName` is required."
    }
  }
}
```


# Update a Flight record

**URL** : `/flights/:id`

**Method** : `PUT`

**Request Data example** :

```json
{
	"flightParams": {
		"terminal": "AAAAA",
		"status": "LANDED"
	}
}
```

**Success Response** :

```json
{
  "status": "success",
  "data": {
    "status": "LANDED",
    "_id": "60269e4c25ecc4c80e0aa91c",
    "flightCode": "",
    "flightProvider": "",
    "sourcePortName": "ABC Port",
    "sourcePortCode": "ABCCODE",
    "destinationPortName": "XYZ Destination",
    "destinationPortCode": "",
    "scheduledArrival": "2021-02-12T15:13:35.641Z",
    "scheduledDeparture": "2021-02-12T15:13:35.641Z",
    "terminal": "AAAAA",
    "createdAt": "2021-02-12T15:27:08.640Z",
    "updatedAt": "2021-02-12T16:08:28.015Z",
    "__v": 0
  }
}
```

**Validation error** :

```json
{
  "status": 400,
  "data": {
    "error": {
      "errors": {
        "status": {
          "name": "ValidatorError",
          "message": "`` is not a valid enum value for path `status`.",
          "properties": {
            "message": "`` is not a valid enum value for path `status`.",
            "type": "enum",
            "enumValues": [
              "SCHEDULED",
              "BOARDING",
              "ON SCHEDULE",
              "LANDED",
              "DELAYED"
            ],
            "path": "status",
            "value": ""
          },
          "kind": "enum",
          "path": "status",
          "value": ""
        }
      },
      "_message": "Validation failed",
      "name": "ValidationError",
      "message": "Validation failed: status: `` is not a valid enum value for path `status`."
    }
  }
}
```

# DELETE a Flight record

**URL** : `/flights/:id`

**Method** : `DELETE`

**Request Data example** : N/A

**Success Response** :

```json
{
  "status": "success",
  "data": {
    "_id": "60269e4c25ecc4c80e0aa91c"
  }
}
```

**Validation error** :

```json
{
  "status": 404,
  "data": {
    "_id": "60269e4c25ecc4c80e0aa91c"
  }
}
```

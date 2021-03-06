module.exports = {
    "/3pc/generate-user-token": {
        post: {
            tags: ["Third Party APIs for Community"],
            summary: "Generate community user token",
            operationId: "thirdPartyAPICGenerateUserToken",
            security: [{
                clientId: [],
                clientSecret: [],
                communityId: []
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "hachacha@gmail.com",
                                    description: "Required",
                                    required: true
                                },
                                createUser: {
                                    type: "boolean",
                                    example: true,
                                    description: "Optional (default: false) - If true, creates a new user if not found",
                                    required: false
                                },
                                name: {
                                    type: "string",
                                    example: "Yamcha",
                                    description: "Required with createUser",
                                    required: false
                                },
                                picture: {
                                    type: "string",
                                    example: "https://example.com/yamcha.jpg",
                                    description: "Required with createUser",
                                    required: false
                                },
                                description: {
                                    type: "string",
                                    example: "Yamcha is a ninja",
                                    description: "Required with createUser",
                                    required: false
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for generate community user token",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "user": {
                                        $ref: "#/components/schemas/UserLogin"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    description: "User not found",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        type: "string",
                                        example: "User not found!"
                                    },
                                    "error": {
                                        type: "object",
                                        properties: {}
                                    }
                                }
                            }
                        }
                    }
                },
                "401": {
                    description: "Unauthenticated user response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        type: "string",
                                        example: "Unauthenticated!"
                                    },
                                    "error": {
                                        type: "string",
                                        example: "clientid, clientsecret and communityid are required in header!"
                                    }
                                }
                            }
                        }
                    }
                },
                "422": {
                    description: "Validation error response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "errors": {
                                        type: "object",
                                        properties: {
                                            "email": {
                                                type: "array",
                                                items: {
                                                    type: "string",
                                                    example: "The email format is invalid!"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/3pc/update-user-details": {
        post: {
            tags: ["Third Party APIs for Community"],
            summary: "Update community user details",
            operationId: "thirdPartyAPICUpdateUserDetails",
            security: [{
                clientId: [],
                clientSecret: [],
                communityId: []
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "hachacha@gmail.com",
                                    description: "Required | This is the email of the user whose details needs updation",
                                    required: true
                                },
                                name: {
                                    type: "string",
                                    example: "Yamcha",
                                    description: "Required",
                                    required: true
                                },
                                picture: {
                                    type: "string",
                                    example: "https://google.com/image.png",
                                    description: "URL for the profile picture of the user",
                                    required: false
                                },
                                description: {
                                    type: "string",
                                    example: "I am Yamcha",
                                    description: "Short description about the user",
                                    required: false
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for updating user details",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "user": {
                                        $ref: "#/components/schemas/UserLogin"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    description: "User not found",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        type: "string",
                                        example: "User not found!"
                                    },
                                    "error": {
                                        type: "object",
                                        properties: {}
                                    }
                                }
                            }
                        }
                    }
                },
                "401": {
                    description: "Unauthenticated user response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        type: "string",
                                        example: "Unauthenticated!"
                                    },
                                    "error": {
                                        type: "string",
                                        example: "clientid, clientsecret and communityid are required in header!"
                                    }
                                }
                            }
                        }
                    }
                },
                "422": {
                    description: "Validation error response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "errors": {
                                        "type": "object",
                                        "properties": {
                                            "email": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string",
                                                    "example": "The email field is required."
                                                }
                                            },
                                            "name": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string",
                                                    "example": "The name field is required."
                                                }
                                            },
                                            "description": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string",
                                                    "example": "The description field is required."
                                                }
                                            },
                                            "picture": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string",
                                                    "example": "The picture field is required."
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
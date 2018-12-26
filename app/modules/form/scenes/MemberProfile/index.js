import React, { Component } from "react";
import { Text, View } from "react-native";
import DynamicForm from "./../../components/DynamicForm/index";

class MemberProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = model => {
    console.log(model);
  };

  render() {
    return (
      <View>
        <DynamicForm
          title="Member Profile Form"
          model={[
            {
              "key": "tabPersonal",
              "isDisabled": false,
              "isRequired": true,
              "focus": false,
              "displayOrder": 0,
              "type": "tab",
              "templateOptions": {
                "label": "Personal"
              },
              "fields": [
                {
                  "parentKey": "firstName",
                  "parentId": "55a6b135-dcc5-4c5f-8d9e-efae6d143d61",
                  "key": "firstName",
                  "isDisabled": false,
                  "isRequired": true,
                  "focus": false,
                  "displayOrder": 1,
                  "type": "input",
                  "templateOptions": {
                    "type": "text",
                    "label": "First Name"
                  },
                  "fields": [],
                  "id": "7e789cc3-63a2-4346-91ee-1f016d27b742"
                },
                {
                  "parentKey": "lastName",
                  "parentId": "55a6b135-dcc5-4c5f-8d9e-efae6d143d61",
                  "key": "lastName",
                  "isDisabled": false,
                  "isRequired": true,
                  "focus": false,
                  "displayOrder": 2,
                  "type": "input",
                  "templateOptions": {
                    "type": "text",
                    "label": "Last Name"
                  },
                  "fields": [],
                  "id": "983dc99a-03ed-4625-81bb-8bbf75e9c98c"
                },
                {
                  "parentKey": "profileImage",
                  "parentId": "55a6b135-dcc5-4c5f-8d9e-efae6d143d61",
                  "key": "profileImage",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 0,
                  "type": "input",
                  "templateOptions": {
                    "type": "profileImage",
                    "label": "Profile Image",
                    "accept": "image/*"
                  },
                  "fields": [],
                  "id": "212fb740-4c41-47c5-aa46-fe85adbe3820"
                }
              ],
              "id": "55a6b135-dcc5-4c5f-8d9e-efae6d143d61"
            },
            {
              "key": "tabContact",
              "isDisabled": false,
              "isRequired": true,
              "focus": false,
              "displayOrder": 1,
              "type": "tab",
              "templateOptions": {
                "label": "Contact"
              },
              "fields": [
                {
                  "parentKey": "landline",
                  "parentId": "118bb3bc-8c2c-43a3-9ccb-2f7a81dda18e",
                  "key": "landline",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 3,
                  "type": "input",
                  "templateOptions": {
                    "type": "text",
                    "label": "Landline"
                  },
                  "fields": [],
                  "id": "4dd8fc17-cbb3-4728-bcae-1561d0cebca9"
                },
                {
                  "parentKey": "email",
                  "parentId": "118bb3bc-8c2c-43a3-9ccb-2f7a81dda18e",
                  "key": "email",
                  "isDisabled": false,
                  "isRequired": true,
                  "focus": false,
                  "displayOrder": 3,
                  "type": "input",
                  "templateOptions": {
                    "type": "text",
                    "label": "Email"
                  },
                  "fields": [],
                  "id": "09146880-9377-4fdb-a4ba-697b846daf46"
                },
                {
                  "parentKey": "mobile",
                  "parentId": "118bb3bc-8c2c-43a3-9ccb-2f7a81dda18e",
                  "key": "mobile",
                  "isDisabled": false,
                  "isRequired": true,
                  "focus": false,
                  "displayOrder": 4,
                  "type": "input",
                  "templateOptions": {
                    "type": "text",
                    "label": "Mobile"
                  },
                  "fields": [],
                  "id": "4fac42d8-e561-4546-9852-875a8f6b37e2"
                }
              ],
              "id": "118bb3bc-8c2c-43a3-9ccb-2f7a81dda18e"
            },
            {
              "key": "tabWork",
              "isDisabled": false,
              "isRequired": false,
              "focus": false,
              "displayOrder": 2,
              "type": "tab",
              "templateOptions": {
                "label": "Work"
              },
              "fields": [
                {
                  "parentKey": "companyPhone",
                  "parentId": "bef91fd2-a975-4558-b1d5-c920405c9203",
                  "key": "companyPhone",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 2,
                  "type": "input",
                  "templateOptions": {
                    "type": "text",
                    "label": "Company Phone"
                  },
                  "fields": [],
                  "id": "e8f3bc66-3fab-4254-a22f-2bed6fdfc20a"
                },
                {
                  "parentKey": "designation",
                  "parentId": "bef91fd2-a975-4558-b1d5-c920405c9203",
                  "key": "designation",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 0,
                  "type": "text",
                  "templateOptions": {
                    "type": "text",
                    "label": "Designation"
                  },
                  "fields": [],
                  "id": "af8d0861-824e-408d-9fe8-62d5d05714f0"
                },
                {
                  "parentKey": "companyName",
                  "parentId": "bef91fd2-a975-4558-b1d5-c920405c9203",
                  "key": "companyName",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 1,
                  "type": "input",
                  "templateOptions": {
                    "type": "text",
                    "label": "Company Name"
                  },
                  "fields": [],
                  "id": "823f01d8-de73-4505-9912-a6b6c20cc2d7"
                },
                {
                  "parentKey": "companyAddress",
                  "parentId": "bef91fd2-a975-4558-b1d5-c920405c9203",
                  "key": "companyAddress",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 3,
                  "type": "address",
                  "templateOptions": {
                    "type": "address",
                    "label": "CompanyAddress"
                  },
                  "fields": [],
                  "id": "781dc394-8871-417a-b1d1-b5d50dc28932"
                }
              ],
              "id": "bef91fd2-a975-4558-b1d5-c920405c9203"
            },
            {
              "key": "tabFun Stuff ",
              "isDisabled": false,
              "isRequired": false,
              "focus": false,
              "displayOrder": 4,
              "type": "tab",
              "templateOptions": {
                "label": "Fun Stuff "
              },
              "fields": [
                {
                  "parentKey": "activities",
                  "parentId": "438b6d6f-9012-4980-858d-28475a3f7bc7",
                  "key": "activities",
                  "isDisabled": false,
                  "isRequired": true,
                  "focus": false,
                  "displayOrder": 2,
                  "type": "input",
                  "templateOptions": {
                    "type": "radioButtonGroup",
                    "label": "Activities",
                    "options": [
                      {
                        "value": 1,
                        "text": "BB"
                      },
                      {
                        "value": 2,
                        "text": "Archery"
                      },
                      {
                        "value": 3,
                        "text": "Shooting"
                      },
                      {
                        "value": 4,
                        "text": "Foooseballl"
                      },
                      {
                        "value": 5,
                        "text": "Volly Ball"
                      }
                    ]
                  },
                  "fields": [],
                  "id": "4274a462-da84-4c2f-ae4b-80f7418ca0a3"
                },
                {
                  "parentKey": "hobbies",
                  "parentId": "438b6d6f-9012-4980-858d-28475a3f7bc7",
                  "key": "hobbies",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 1,
                  "type": "input",
                  "templateOptions": {
                    "type": "checkboxGroup",
                    "label": "Hobbies",
                    "options": [
                      {
                        "value": 1,
                        "text": "Eat"
                      },
                      {
                        "value": 2,
                        "text": "Games"
                      },
                      {
                        "value": 3,
                        "text": "Books"
                      },
                      {
                        "value": 4,
                        "text": "Outdoor games"
                      },
                      {
                        "value": 5,
                        "text": "Lazy "
                      },
                      {
                        "value": 6,
                        "text": "Sleep"
                      },
                      {
                        "value": 7,
                        "text": "Happy Hour"
                      }
                    ]
                  },
                  "fields": [],
                  "id": "9f260308-ae35-4152-911f-9d53e130505c"
                }
              ],
              "id": "438b6d6f-9012-4980-858d-28475a3f7bc7"
            },
            {
              "key": "tabElastic ",
              "isDisabled": false,
              "isRequired": false,
              "focus": false,
              "displayOrder": 4,
              "type": "tab",
              "templateOptions": {
                "label": "Elastic "
              },
              "fields": [
                {
                  "parentKey": "tERER",
                  "parentId": "93b3c0c8-5c68-4e1f-9a52-415c9e2d1d73",
                  "key": "tERER",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 2,
                  "type": "input",
                  "templateOptions": {
                    "type": "checkBox",
                    "label": "TERER"
                  },
                  "fields": [],
                  "id": "64e0059b-96e7-4056-9b47-2c61e72dcdd1"
                },
                {
                  "parentKey": "dropdownds",
                  "parentId": "93b3c0c8-5c68-4e1f-9a52-415c9e2d1d73",
                  "key": "dropdownds",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 3,
                  "type": "input",
                  "templateOptions": {
                    "type": "select",
                    "label": "Dropdownds",
                    "options": [
                      {
                        "value": 1,
                        "text": "1"
                      },
                      {
                        "value": 2,
                        "text": "2"
                      },
                      {
                        "value": 3,
                        "text": "3"
                      },
                      {
                        "value": 4,
                        "text": "4"
                      }
                    ]
                  },
                  "fields": [],
                  "id": "3769a45d-76fc-4a8b-8266-31b8a00adad4"
                },
                {
                  "parentKey": "calender",
                  "parentId": "93b3c0c8-5c68-4e1f-9a52-415c9e2d1d73",
                  "key": "calender",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 5,
                  "type": "input",
                  "templateOptions": {
                    "type": "calendar",
                    "label": "Calender"
                  },
                  "fields": [],
                  "id": "d1fc1b6b-4e48-4321-88ba-5c79846f71b0"
                },
                {
                  "parentKey": "doc",
                  "parentId": "93b3c0c8-5c68-4e1f-9a52-415c9e2d1d73",
                  "key": "doc",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 4,
                  "type": "input",
                  "templateOptions": {
                    "type": "file",
                    "label": "Doc"
                  },
                  "fields": [],
                  "id": "abd939ad-f3d4-4e04-b547-85f3bf23c776"
                },
                {
                  "parentKey": "kamakazi",
                  "parentId": "93b3c0c8-5c68-4e1f-9a52-415c9e2d1d73",
                  "key": "kamakazi",
                  "isDisabled": false,
                  "isRequired": false,
                  "focus": false,
                  "displayOrder": 1,
                  "type": "input",
                  "templateOptions": {
                    "type": "checkboxGroup",
                    "label": "Kamakazi",
                    "options": [
                      {
                        "value": 1,
                        "text": "W"
                      },
                      {
                        "value": 2,
                        "text": "T"
                      },
                      {
                        "value": 3,
                        "text": "F"
                      }
                    ]
                  },
                  "fields": [],
                  "id": "17bcf6ee-f602-495c-a8a0-9b9f9ee2b1dd"
                }
              ],
              "id": "93b3c0c8-5c68-4e1f-9a52-415c9e2d1d73"
            }
          ]}
          onSubmit={model => {
            this.onSubmit(model);
          }}
        />
      </View>
    );
  }
}

export default MemberProfile;

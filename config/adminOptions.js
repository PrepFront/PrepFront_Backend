import { ContentModel } from "../database/models/content.js";
import { UserModel } from "../database/models/user.js";
import { PhoneModel } from "../database/models/phoneNumber.js";
import { ExpertModel } from "../database/models/experts.js";

export default {
    resources: [
        {
            resource: UserModel,
            options: {
                navigation: {
                    name: 'Users',
                },
                editProperties: ['full_name', 'email', 'isAdmin', 'phoneNo'],
                listProperties: ['full_name', 'email', 'isAdmin', 'phoneNo'],
                showProperties: ['full_name', '_id', 'email', 'isAdmin', 'createdAt', 'updatedAt', 'phoneNo'],
                filterProperties: ['_id', 'full_name', 'email', 'isAdmin', 'updatedAt', 'createdAt', 'phoneNo']
            },
        },
        {
            resource: ContentModel,
            options: {
                navigation: {
                    name: "Skills",
                },
                editProperties: ['title', 'description', 'feild'],
                listProperties: ['feild', 'title', 'slug'],
                filterProperties: ['_id', 'title', 'description', 'updatedAt', 'createdAt', 'feild']
            },
        },
        {
            resource: PhoneModel,
            options: {
                navigation: {
                    name: "PhoneNumber",
                },
                editProperties: ['countryCode', 'number'],
                listProperties: ['countryCode', 'number'],
                filterProperties: ['_id', 'countryCode', 'number']
            }
        },
        {
            resource: ExpertModel,
            options: {
                navigation: {
                    name: "Expert",
                },
                editProperties: ['email', 'name', 'profession','position','organization'],
                listProperties: ['name'],
                filterProperties: ['_id', 'email', 'name', 'profession','position','organization']
            }
        }
    ],
}
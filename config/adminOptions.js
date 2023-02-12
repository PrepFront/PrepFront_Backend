import { ContentModel } from "../database/models/content.js";
import { UserModel } from "../database/models/user.js";
import { ExpertModel } from "../database/models/experts.js";
import { DCSModel } from "../database/models/dcs.js";
import passwordsFeature from '@adminjs/passwords';
import bcrypt from "bcrypt"

export default {
    resources: [
        {
            resource: UserModel,
            options: {
                editProperties: ['full_name', 'email', 'isAdmin', 'phoneNo', 'password'],
                listProperties: ['full_name', 'email', 'isAdmin', 'phoneNo'],
                showProperties: ['full_name', '_id', 'email', 'isAdmin', 'createdAt', 'updatedAt', 'phoneNo'],
                filterProperties: ['_id', 'full_name', 'email', 'isAdmin', 'updatedAt', 'createdAt', 'phoneNo'],
                properties: { password: { isVisible: false } },
            },
            features: [
                passwordsFeature({
                    properties: {
                        encryptedPassword: 'password',
                        password: 'newPassword'
                    },
                    hash: bcrypt.hash,
                })
            ]
        },
        {
            resource: ContentModel,
            options: {
                navigation: {
                    name: "Skills",
                },
                editProperties: ['title', 'description', 'feild','image'],
                listProperties: ['feild', 'title', 'slug'],
                filterProperties: ['_id', 'title', 'description', 'updatedAt', 'createdAt', 'feild']
            },
        },
        {
            resource: ExpertModel,
            options: {
                navigation: {
                    name: "Expert",
                },
                editProperties: ['email', 'name', 'profession', 'position', 'organization'],
                listProperties: ['name'],
                filterProperties: ['_id', 'email', 'name', 'profession', 'position', 'organization']
            }
        },
        {
            resource: DCSModel,
            options: {
                navigation: {
                    name: "DCS Sessions",
                },
                editProperties: ['expert', 'name', 'time'],
                listProperties: ['name', 'time', 'createdAt'],
                filterProperties: ['_id', 'expert', 'name', 'time', 'createdAt', 'updatedAt']
            }
        }
    ],
}
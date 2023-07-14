import { CognitoIdentityProviderClient, SignUpCommand, SignUpRequest } from "@aws-sdk/client-cognito-identity-provider";

const client = new CognitoIdentityProviderClient({
    credentials: {
        accessKeyId: import.meta.env.VITE_COGNITO_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_COGNITO_SECRET_ACCESS_KEY
    },
    region: "us-east-1"
});

interface UserRegisterDetails {
    username: string;
    password: string;
    name: string;
    email: string;
}

async function register({ username, password, name, email } : UserRegisterDetails) {
    const params : SignUpRequest = {
        ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
        Username: username,
        Password: password,
        UserAttributes: [
            {
                Name: "name",
                Value: name
            },
            {
                Name: "email",
                Value: email
            }
        ]
    };

    const command = new SignUpCommand(params);
    const response = await client.send(command);
    return response;
}

export default register;

import { gql } from "apollo-boost";

export const createUser = gql`
	mutation ($name: String!, $email: String!, $premium: Boolean!) {
		createUser(name: $name, email: $email, premium: $premium) {
			user
			email
			premium
		}
	}
`;

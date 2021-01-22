import UserDetail from './UserDetail';

const UserSection = (props) => {
	if (props.data) {
		return props.data.map((user) => {
			return <UserDetail userData={user} key={user.Id} />;
		});
	} else {
		return (
			<div>
				<h3>No user data found</h3>
			</div>
		);
	}
};

export default UserSection;
import { Typography } from "antd";
import { type  FC } from "react";
import { Link } from "react-router-dom";
import { Logo2Edit } from "src/assets/images";
import { UiCard } from "src/components/ui";

const Privacy: FC = () => {
	return (
		<>
			<UiCard
				style={{
					position: "sticky",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 100,
					borderRadius: 0
				}}
				styles={{
					body: {
						paddingBlock: 0
					}
				}}
			>
				<Link to={"/"}>
					<img src={Logo2Edit} style={{
						maxHeight: 60
					}} alt="Menu Logo" />
				</Link>
			</UiCard>
			<UiCard
				title={"Privacy Policy"}
				extra={"Effective Date: 13.11.2024"}
				style={{
					margin: 20
				}}
				actions={[
					<Typography.Link
						href={"mailto:karsoftuz@gmail.com"}
					>
						<Typography.Text>Email:</Typography.Text> karsoftuz@gmail.com
					</Typography.Link>
				]}
			>
				<Typography.Paragraph>
					At NewAction, we prioritize your privacy and are dedicated to
					protecting
					the information you share with us. This Privacy Policy explains how we
					collect, use, protect, and retain your data when you use our app.
				</Typography.Paragraph>
				<Typography.Paragraph strong={true}>
					1. Information We Collect
				</Typography.Paragraph>
				<Typography.Paragraph>
					<b>Profile Information</b> <br />
					When you register for our language courses, we collect the following
					personal information to create and manage your student profile:
					<br />
					<ul>
						<li>First and Last Name: For profile creation and management.</li>
						<li>Phone Number: Used for registration, authentication, and
							communication
							purposes.
						</li>
					</ul>
					<b>Group Requests and Ratings</b> <br />
					<ul>
						<li>
							Group Requests: Allows students to request specific language
							course
							groups.
						</li>
						<li>
							Ratings: Students can view ratings within their course groups and
							overall within the educational center.
						</li>
					</ul>
				</Typography.Paragraph>
				<Typography.Paragraph strong={true}>
					2. Online Chat Feature
				</Typography.Paragraph>
				<Typography.Paragraph>
					Our app provides a chat feature for communication related to
					educational
					services. Messages you send are stored securely on our servers and are
					only accessible to: <br />
					<br />
					<ul>
						<li>
							Director
						</li>
						<li>
							Administrator
						</li>
						<li>
							Teachers
						</li>
					</ul>
					We do not share these messages with third parties.
				</Typography.Paragraph>
				<Typography.Paragraph strong={true}>
					3. How We Use Your Information
				</Typography.Paragraph>
				<Typography.Paragraph>
					<ul>
						<b>We use your information to:</b> <br />
						<li>
							Manage registration and access to language courses.
						</li>
						<li>
							Facilitate communication between students, teachers, and
							administrative staff.
						</li>
						<li>
							Display performance ratings within the educational center.
						</li>
					</ul>
				</Typography.Paragraph>
				<Typography.Paragraph strong={true}>
					4. Data Sharing, Security, and Retention
				</Typography.Paragraph>
				<Typography.Paragraph>
					<ul>
						<li>
							<b>Data Sharing</b> <br />
							We do not share your information with third parties unless legally
							required or necessary for service provision (e.g., technical
							support
							or hosting services).
						</li>
						<br />
						<li>
							<b>Security Measures</b> <br />
							To protect your personal data from unauthorized access,
							alteration,
							disclosure, or destruction, we employ industry-standard security
							protocols, including encryption and secure storage.
						</li>
						<br />
						<li>
							<b>Data Retention</b> <br />
							We retain your data only as long as necessary for its intended
							purposes
							or as required by law. You may request profile data deletion at
							any
							time
							by contacting us.
						</li>
					</ul>
				</Typography.Paragraph>
				<Typography.Paragraph strong={true}>
					5. Your Rights
				</Typography.Paragraph>
				<Typography.Paragraph>
					<b>You have the right to:</b> <br />
					
					<ul>
						<li>
							Access, update, or correct any inaccuracies in your data.
						</li>
						<li>
							Request deletion of your profile and data if you choose to
							discontinue
							use of the app.
						</li>
					</ul>
				</Typography.Paragraph>
				<Typography.Paragraph strong={true}>
					6. App Permissions
				</Typography.Paragraph>
				<Typography.Paragraph>
					<b>Our app may request the following permissions:</b> <br />
					
					<ul>
						<li>
							Internet Access: For communication and synchronization with our
							servers.
						</li>
						<li>
							Notification Access: To provide updates on course-related
							information and ratings.
						</li>
					</ul>
					We do not access your personal files or contacts.
				</Typography.Paragraph>
				<Typography.Paragraph strong={true}>
					7. Contact Us
				</Typography.Paragraph>
				<Typography.Paragraph>
					If you have any questions about this Privacy Policy or how your data
					is
					handled, please contact us at:
				</Typography.Paragraph>
			</UiCard>
		</>
	);
};

export { Privacy };

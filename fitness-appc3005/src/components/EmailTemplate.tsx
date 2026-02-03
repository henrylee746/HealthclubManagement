interface EmailTemplateProps {
    firstName: string;
    verificationUrl: string;
}

export function EmailTemplate({ firstName, verificationUrl }: EmailTemplateProps) {
    return (
        <div>
            <h1>Welcome, {firstName}!</h1>
            <p>Thank you for signing up for our fitness app.</p>
            <p>Please click the link below to verify your email:</p>
            <a href={verificationUrl}>Verify Email</a>
        </div>
    );
}
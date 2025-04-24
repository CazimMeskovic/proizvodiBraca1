// components/ConfirmationPage.js

const ConfirmationPage = ({ orderDetails }) => {
    return (
        <div>
            <h1>Order Confirmation</h1>
            <p>Thank you for your purchase!</p>
            <div>
                <h3>Order Details:</h3>
                <ul>
                    <li>Name: {orderDetails.name}</li>
                    <li>Email: {orderDetails.email}</li>
                    <li>Package: {orderDetails.package}</li>
                </ul>
            </div>
        </div>
    );
};

export default ConfirmationPage;

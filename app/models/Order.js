import mongoose from 'mongoose';

/* const OrderSchema = new mongoose.Schema({
    name: String,
    email: String,
    projectName: String,
    projectDetails: String,
    budget: String,
    timeline: String,
    focusAreas: [String],
    package: String,
    createdAt: { type: Date, default: Date.now },
}); */
const OrderSchema = new mongoose.Schema({
    name: String,
    email: String,
    projectName: String,
    projectDetails: String,
    budget: String,
    timeline: String,
    focusAreas: [String],
    package: String,
    paymentInfo: Object, // dodano
    createdAt: { type: Date, default: Date.now },
});


export default mongoose.models.Order || mongoose.model('Order', OrderSchema);

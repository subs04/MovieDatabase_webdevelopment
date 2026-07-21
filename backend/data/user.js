import mongoose from 'mongoose'

const userSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        minimum: 6,
        required: true,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },  
    {timestamps: true},

}); 

const User = mongoose.model('User', userSchema);

User.pre('save', () => {
    if(!this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10);
    }
});
export default User;


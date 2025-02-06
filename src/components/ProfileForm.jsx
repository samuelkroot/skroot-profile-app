import { useState } from "react";

const ProfileForm = () => {
    const [data, setData] = useState({ name: "", email: "", title: "", bio: "", image: null });
    const [errors, setErrors] = useState({image: "", general: ""});
    const [successMsg, setSuccessMsg] = useState("");
    const [submitting, setSubmitting] = useState(false);
    
    const handleChange = (e) => {
        if (e.target.name === "image") {
            const file = e.target.files[0];
            if (file.size > 2000000) {
                setErrors({...errors, image: "Image must be less than 2MB"});
            } else {
                setData({ ...data, image: file });
            }
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData(e.target);
        formData.append("name", data.name.trim());
        formData.append("email", data.email.trim());
        formData.append("title", data.title.trim());
        formData.append("bio", data.bio.trim());
        if (data.image) formData.append("image", data.image.trim());

        console.log(formData);
        try {
            const response = await fetch('https://web.ics.purdue.edu/~skroot/cgt-390/public/send-data.php', { 
                method: POST, 
                body: formData 
            });
            const result = await response.json();
            
            if (result.success) {
                setData({ name: "", email: "", title: "", bio: "", image: null });
                setErrors({image: "", general: ""});
                setSuccessMsg("Profile submitted successfully!");
                setTimeout(() => {
                    setSuccessMsg("");
                }, 3000);
            } else {
                setErrors({image: "", general: result.message});
                setSuccessMsg("");
            }

            console.log(result.message);
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                required="required" 
                value={data.name} 
                onChange={handleChange} 
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required="required" 
                value={data.email} 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="title" 
                placeholder="Title" 
                required="required" 
                value={data.title} 
                onChange={handleChange} 
            />
            <textarea 
                name="bio" 
                placeholder="Personal description" 
                maxLength={200} required="required" 
                value={data.bio} 
                onChange={handleChange}
            ></textarea>
            <p>{data.bio.length}/200</p>
            <label htmlFor="image">Upload a profile image:</label>
            <input 
                type="file" 
                name="image" 
                id="image" 
                accept="image/jpg, image/jpeg, image/png, image/webp, image/gif" 
                required="required" 
                onChange={handleChange} 
            />
            {errors.image && <p>{errors.image}</p>}
            <button type="submit" disabled={submitting || errors.image !== "" || data.name === "" || data.email === "" || data.title === "" || data.bio === "" || data.image === null ? true : false }>Submit</button>
            {errors.general && <p>{errors.general}</p>}
            {successMsg && <p>{successMsg}</p>}
        </form>
    )
}

export default ProfileForm;
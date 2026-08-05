import "./Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import API from "../../api/api";

export default function Signup() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const { data } = await API.post(
        "/auth/register",
        form
      );

      toast.success(data.message);

      navigate("/login");

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="login-page">

      <div className="login-card">

        <h1>LUXEORA</h1>

        <p>Create Your Account</p>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <div className="password-box">

            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>

          </div>

          <button type="submit">

            {loading ? "Creating..." : "Sign Up"}

          </button>

        </form>

        <p className="switch-auth">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </section>

  );

}
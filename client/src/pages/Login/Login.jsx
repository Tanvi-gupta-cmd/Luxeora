import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import API from "../../api/api";
import { useAuth } from "../../context/AuthContext";

export default function Login() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
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

      const { data } = await API.post("/auth/login", form);

      login(data.user, data.token);

      toast.success("Welcome Back ✨");

      navigate("/");

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="login-page">

      <div className="login-card">

        <h1>LUXEORA</h1>

        <p>Welcome Back</p>

        <form onSubmit={handleSubmit}>

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

            {loading ? "Signing In..." : "Login"}

          </button>

        </form>

        <p className="switch-auth">

          Don't have an account?

          <Link to="/signup">
            Sign Up
          </Link>

        </p>

      </div>

    </section>

  );

}
---
editLink: false
lastUpdated: false
---
# Contact us!
<script setup>
  import Swal from 'sweetalert2'
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();

      Swal.fire({
        title: "Thank you!",
        text: "Your message has been sent.",
        icon: "success"
      });
    } else {
      console.log("Error", data);

      Swal.fire({
        title: "Error!",
        text: "Something went wrong. If this issue persists, email us at seattlecomputingresourcing@gmail.com",
        icon: "error"
      });
    }
  };
</script>
<div>
  <section className="contact">
    <form @submit.prevent="onSubmit">
      <div className="input-box">
        <label>Name</label>
        <input
          type="text"
          className="field"
          placeholder="Enter your name"
          name="name"
          required
        />
      </div>
      <div className="input-box">
        <label>Email</label>
        <input
          type="text"
          className="field"
          placeholder="Enter your email"
          name="email"
          required
        />
      </div>
      <div className="input-box">
        <label>Message</label>
        <textarea
          type="text"
          className="field message"
          placeholder="Enter your message"
          name="message"
          required
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  </section>
</div>

<style>
  :root {
    --vp-c-text-light: #ffffff;
    --vp-c-bg-light: #222222; 
    --vp-c-text-dark: #222222; 
    --vp-c-bg-dark: #ffffff; 
    --vp-c-border-light: #333333;
    --vp-c-border-dark: #ffffff;
  }

  form h2 {
    font-size: 30px;
    text-align: center;
    color: var(--vp-c-text-dark);
  }

  .dark form h2 {
    color: var(--vp-c-text-light);
  }

  form .input-box {
    margin-top: 20px;
  }

  .input-box .field {
    color: var(--vp-c-text-dark);
    width: 100%;
    height: 50px;
    background: transparent;
    border: 1px solid var(--vp-c-border-light);
    outline: none;
    border-radius: 6px;
    padding: 15px;
    font-size: 16px;
    margin-top: 8px;
    transition: 0.5s;
  }

  .dark .input-box .field {
    color: var(--vp-c-text-light);
    border-color: var(--vp-c-border-dark);
  }

  .input-box .field.message {
    height: 200px;
    resize: none;
  }

  form button {
    width: 100%;
    height: 55px;
    background: var(--vp-c-text-dark);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    color: var(--vp-c-bg-dark);
    font-weight: 500;
    margin-top: 25px;
  }

  .dark form button {
    background: var(--vp-c-text-light);
    color: var(--vp-c-bg-light);
  }
</style>
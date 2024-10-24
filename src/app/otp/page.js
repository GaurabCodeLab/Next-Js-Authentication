const OTP = () => {
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputText" class="form-label">
          Email OTP
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputText"
          style={{ width: "50%" }}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit OTP
      </button>
    </form>
  );
};

export default OTP;

export default function OffreDemande() {
  return (
    <form>
      <div className="d-flex flex-row w-25">
        <label className="container d-flex flex-row">
          <input name="contact" type="checkbox" />
          <span className="checkmark"></span>
          <span className="ps-3" style={{ fontSize: "13px" }}>
            Offre
          </span>
        </label>

        <label className="container d-flex flex-row align-items-center">
          <input name="contact" type="checkbox" />
          <span className="checkmark"></span>
          <span className="ps-3" style={{ fontSize: "13px" }}>
            Demande
          </span>
        </label>
      </div>
    </form>
  );
}

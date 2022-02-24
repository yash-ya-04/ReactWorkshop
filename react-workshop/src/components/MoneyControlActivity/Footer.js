export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start" style={{ width: '100%', position: 'fixed', left: '0', bottom: '0'}}>
      <div className="text-center p-3" style={{ backgroundColor:'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className="text-dark" href="/">
          Money Control
        </a>
      </div>
    </footer>
  );
}

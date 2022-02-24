export default function Footer() {
  return (
    <footer class="bg-light text-center text-lg-start" style={{ width: '100%', position: 'fixed', left: '0', bottom: '0'}}>
      <div className="text-center p-3" style={{ 'background-color':'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a class="text-dark" href="/">
          Money Control
        </a>
      </div>
    </footer>
  );
}

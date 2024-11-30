
const styles = `
/* Scroll Animation Keyframes */
@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll{
animation: scroll 25s linear infinite;

}

`;

const StyleInjector = () => (
  <style>{styles}</style>
);

export default StyleInjector;
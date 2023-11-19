export const animations = {
  fadeIn: `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  slideIn: `
    @keyframes slideIn {
      from {
        transform: translate(-50%, -50%) translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translate(-50%, -50%) translateY(0);
        opacity: 1;
      }
    }
  `,
  riseUp: `
    @keyframes riseUp {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  floating: `
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }
  `,
  // 다른 애니메이션 효과 추가 가능
}

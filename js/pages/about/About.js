import React from 'react';

const ABOUT_TEXT = [
  `I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago.I'm Andrew Gnott a Software Engineer from southwest Michigan, relocated to Chicago. `,
];

const PatternBlock = () => {
  const pallete = [];
  const gradients = {
    up: { angle: Math.floor(Math.random() * 360), lines: [], source: '' },
    down: { angle: Math.floor(Math.random() * 360), lines: [], source: '' },
  };

  for (let i = 0; i < 3 + Math.random() * 3; i++) {
    pallete.push(`rgb(var(--color-primary-default-source), ${Math.random()})`);
  }

  for (let i = 0; i < 10 + Math.random() * 5; i++) {
    const lastLine = !gradients.up.lines.length ? null : gradients.up.lines[gradients.up.lines.length - 1];

    gradients.up.lines.push({
      color: pallete[Math.floor(Math.random() * pallete.length)],
      width: 10 + Math.random() * 10,
      spacing: 10 + Math.random() * 10,
      start: lastLine ? lastLine.start + lastLine.width + lastLine.spacing : 0,
    });
  }

  for (let i = 0; i < 10 + Math.random() * 5; i++) {
    const lastLine = !gradients.down.lines.length ? null : gradients.down.lines[gradients.down.lines.length - 1];

    gradients.down.lines.push({
      color: pallete[Math.floor(Math.random() * pallete.length)],
      width: 10 + Math.random() * 10,
      spacing: 5 + Math.random() * 10,
      start: lastLine ? lastLine.start + lastLine.width + lastLine.spacing : 0,
    });
  }

  gradients.up.source = `
    repeating-linear-gradient(
      ${gradients.up.angle}deg
      ${
        gradients.up.lines.map((l) => (
          `, transparent ${l.start}px, transparent ${l.start + l.spacing}px, ${l.color} ${l.start + l.spacing}px, ${l.color} ${l.start + l.spacing + l.width}px`
        )).join('')
      }
    )
  `;

  gradients.down.source = `
    repeating-linear-gradient(
      ${gradients.down.angle}deg
      ${
        gradients.down.lines.map((l) => (
          `, transparent ${l.start}px, transparent ${l.start + l.spacing}px, ${l.color} ${l.start + l.spacing}px, ${l.color} ${l.start + l.spacing + l.width}px`
        )).join('')
      }
    )
  `;

  const style = { backgroundImage: `${gradients.up.source}, ${gradients.down.source}` };
  return <div className="page__content-pattern" style={style}/>;
};

class About extends React.Component {
  render() {
    return (
      <div className="page__container">
        <div className="page__title">About</div>
        <div className="page__content">
          {
            ABOUT_TEXT.map((t, i) => (
              <div key={i} className="page__content-block">
                <div className="page__content-text">{t}</div>
                <PatternBlock />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default About;

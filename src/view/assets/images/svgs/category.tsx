import * as React from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Circle, Path, Polygon, Rect} from 'react-native-svg';
import {THEME} from '../../../styles/theme';

interface Props {
  style?: ViewStyle;
  color?: string;
}

export const CategoryIconDefaultProps: Props = {
  style: {width: 26, height: 26},
  color: THEME.COLOR.Primary,
};

const Stileto = ({style, color}: Props) => {
  return (
    <Svg viewBox="0 0 480.016 480.016" style={style}>
      <Path
        fill="#fff"
        d="M471.371,413.579c-7.965-27.692-28.668-62.95-54.38-85c-18.93-16.22-44.46-22.88-68.83-17.66	c-136.645,29.293-133.24-268.946-303.03-264.91c-9.28,0.21-17.67,5.73-21.35,14.25c-15.24,35.21-19.17,73.11-12.93,109.02	c0.03,0.16,0.06,0.32,0.1,0.48c0,109.401,50.874,135.195,37.74,246.32c-1.13,9.56,6.34,17.97,15.96,17.97h13.68	c9.48,0,16.9-8.19,15.98-17.63c-13.01-133.18-11.99-152.28,1.56-196.31c68.792,43.107,115.537,113.303,139.04,191.02	c4.1,13.6,16.6,22.92,30.8,22.92h190.19C466.581,434.049,474.342,423.829,471.371,413.579z"
      />
      <Path
        fill={color}
        d="M72.523,423.408c1.77,4.907-1.64,10.597-7.872,10.641c-9.62,0.069-17.09-8.41-15.96-17.97	c13.13-111.09-37.73-136.93-37.74-246.289c1.67,8.49,7.92,15.329,16.16,18.03c2.46,0.81,4.95,1.65,7.47,2.55	c5.81,92.56,49.37,121.94,37.11,225.71C71.387,418.652,71.706,421.142,72.523,423.408z"
      />
      <Path
        fill={color}
        d="M471.371,413.579c2.97,10.25-4.79,20.47-15.47,20.47h-190.19c-14.2,0-26.7-9.32-30.8-22.92	c-2.35-7.77-5.26-16.56-8.88-26.08h233.83C465.151,395.519,469.021,405.409,471.371,413.579z"
      />
      <Path
        fill="#fff"
        d="M417.249,328.8c5.474,4.714,0.979,13.593-6.09,12.1c-10.759-2.272-21.996-2.336-32.998,0.019	c-27.435,5.88-49.265-1.508-67.997-17.031c-5.596-4.637-1.379-13.678,5.755-12.287c9.856,1.921,20.538,1.826,32.242-0.682	C371.997,305.813,397.665,311.937,417.249,328.8z"
      />
      <Path
        fill="#222"
        d="M479.06,411.355c-7.669-26.537-28.226-64.301-56.865-88.847c-20.827-17.852-49.134-25.107-75.711-19.408 C218.5,330.55,220.608,34.058,44.949,38.007c-12.431,0.289-23.623,7.776-28.514,19.074C0.95,92.858-3.71,132.092,2.954,170.548 C3.196,280.947,53.571,306.6,40.748,415.137c-1.692,14.307,9.495,26.912,23.907,26.912h13.672 c14.201,0,25.328-12.272,23.946-26.409c-7.522-76.983-10.704-118.611-8.438-146.968c0.352-4.404-2.933-8.26-7.337-8.612 c-4.397-0.35-8.26,2.933-8.612,7.337c-2.363,29.562,0.846,71.858,8.463,149.8c0.465,4.744-3.253,8.853-8.022,8.853H64.655 c-4.845,0-8.586-4.217-8.019-9.035C69.002,312.356,26.456,282,19.818,193.395c12.23,6.291,116.22,29.628,181.246,155.29 c2.031,3.923,6.857,5.457,10.782,3.429c3.924-2.031,5.459-6.858,3.429-10.782C173.092,259.818,107.85,205.817,29.604,180.215 c-5.828-1.907-9.884-6.703-10.87-12.308C12.581,132.5,16.863,96.374,31.119,63.436c2.418-5.586,7.993-9.289,14.202-9.434 c82.268-1.972,121.074,70.738,159.775,143.573c35.005,65.875,71.503,136.863,144.741,121.169 c21.73-4.655,44.886,1.291,61.945,15.912c26.131,22.396,44.898,56.89,51.906,81.141c1.479,5.116-2.404,10.251-7.783,10.251H265.711 c-10.731,0-20.031-6.923-23.142-17.228c-1.59-5.269-3.315-10.54-5.133-15.772H403.85c4.418,0,8-3.582,8-8s-3.582-8-8-8 c-191.355,0-178.006-0.022-178.613,0.039c-4.196,0.442-7.226,3.929-7.226,7.961c0,3.214,2.562,6.27,9.24,28.396 c5.164,17.109,20.619,28.604,38.459,28.604h190.195C471.957,442.049,483.493,426.696,479.06,411.355z"
      />
      <Path
        fill="#222"
        d="M67.524,88.76c0.151-0.484,0.305-0.968,0.459-1.452c1.349-4.207-0.97-8.711-5.178-10.059 c-4.211-1.355-8.711,0.97-10.059,5.178c-0.168,0.521-0.333,1.044-0.496,1.567c-1.603,5.138,2.234,10.385,7.639,10.385 C63.298,94.379,66.456,92.184,67.524,88.76z"
      />
      <Path
        fill="#222"
        d="M53.522,112.669c-4.384-0.534-8.367,2.607-8.892,6.995c-1.102,9.226-1.561,18.618-1.362,27.914 c0.092,4.347,3.658,7.905,8.168,7.828c4.417-0.094,7.922-3.751,7.828-8.168c-0.182-8.552,0.24-17.191,1.253-25.678 C61.042,117.174,57.91,113.192,53.522,112.669z"
      />
    </Svg>
  );
};
Stileto.defaultProps = CategoryIconDefaultProps;

const Shoes = ({style, color}: Props) => {
  return (
    <Svg viewBox="0 0 64 64" style={style}>
      <Path
        fill="#fff"
        d="M42,27H32.889a7.994,7.994,0,0,1-3.578-.845L23,23l-8.224,3.655A3.992,3.992,0,0,1,13.151,27H10.657a4,4,0,0,1-2.829-1.172L4,22H1l1.406,3.514a4.007,4.007,0,0,1,0,2.972l-1.12,2.8A4,4,0,0,0,1,32.77V42a2,2,0,0,0,2,2H45.4a27.993,27.993,0,0,0,10.769-2.154L63,39V37.62a8,8,0,0,0-6.5-7.859Z"
      />
      <Path
        fill="#fff"
        d="M51,31.75a.944.944,0,0,1-.189-.018l-2-.38a1,1,0,0,1,.375-1.965l2,.381A1,1,0,0,1,51,31.75Z"
      />
      <Path
        fill="#fff"
        d="M23,23l6.311,3.155A7.994,7.994,0,0,0,32.889,27H42L21,16l-1,3Z"
      />
      <Path
        fill={color}
        d="M45.4,44H3v2a2,2,0,0,0,2,2H44.39a28,28,0,0,0,12.522-2.956l3.877-1.938A4,4,0,0,0,63,39.528V39l-6.831,2.846A27.993,27.993,0,0,1,45.4,44Z"
      />
      <Path fill={color} d="M6,46V44H3v2a2,2,0,0,0,2,2H8A2,2,0,0,1,6,46Z" />
      <Path
        fill="#fff"
        d="M1,36H3a8,8,0,0,1,8,8v0a0,0,0,0,1,0,0H3a2,2,0,0,1-2-2V36A0,0,0,0,1,1,36Z"
      />
      <Path
        fill="#fff"
        d="M6.485,36.807A7.952,7.952,0,0,0,3,36H1v6a2,2,0,0,0,2,2h8a7.953,7.953,0,0,0-1.408-4.528A11.278,11.278,0,0,1,6.485,36.807Z"
      />
      <Polygon fill="#fff" points="28 44 24 44 34 27 38 27 28 44" />
      <Polygon fill="#fff" points="25.765 41 24 44 28 44 29.765 41 25.765 41" />
      <Polygon fill="#fff" points="32 44 28 44 38 27 42 27 32 44" />
      <Polygon fill="#fff" points="29.765 41 28 44 32 44 33.765 41 29.765 41" />
      <Path
        fill="#222"
        d="M56.685,28.779,42.332,26.045l-6.56-3.436a.989.989,0,0,0-.065-1.316,1,1,0,0,0-1.414,0l-.355.355-2.119-1.11a.985.985,0,0,0-.112-1.245,1,1,0,0,0-1.414,0L30,19.586l-2.134-1.118a.988.988,0,0,0-.159-1.175,1,1,0,0,0-1.414,0l-.23.23-4.6-2.409a1,1,0,0,0-1.412.57l-1,3a1,1,0,0,0,.148.916l2.247,3-7.078,3.146A2.99,2.99,0,0,1,13.151,26H10.657a2.983,2.983,0,0,1-2.122-.878L4.707,21.293A1,1,0,0,0,4,21H1a1,1,0,0,0-.929,1.372l1.407,3.514a2.99,2.99,0,0,1,0,2.228l-1.12,2.8A4.957,4.957,0,0,0,0,32.771V42a3,3,0,0,0,2,2.816V46a3,3,0,0,0,3,3H44.39a29.146,29.146,0,0,0,12.969-3.062L61.236,44A4.973,4.973,0,0,0,64,39.528V37.62A9.009,9.009,0,0,0,56.685,28.779ZM62,37.62v.713l-6.216,2.59A26.858,26.858,0,0,1,45.4,43H33.749l8.756-14.886,13.805,2.63A7.007,7.007,0,0,1,62,37.62ZM38.572,28h1.68L31.428,43H29.749ZM21.577,17.431l3,1.574-.288.288a1,1,0,1,0,1.414,1.414l.73-.73,2.082,1.09-.226.226a1,1,0,1,0,1.414,1.414l.668-.668,2.081,1.091-.163.163a1,1,0,1,0,1.414,1.414l.6-.605L37.936,26H32.889a7.031,7.031,0,0,1-3.131-.739l-6.1-3.05-2.544-3.392ZM2.215,31.656l1.12-2.8a4.986,4.986,0,0,0,0-3.713L2.478,23H3.586l3.535,3.536A4.968,4.968,0,0,0,10.657,28h2.494a4.972,4.972,0,0,0,2.031-.431l7.793-3.464,5.888,2.945a9.048,9.048,0,0,0,3.41.914l-2.665,4.529a1,1,0,0,0,1.725,1.014L34.572,28h1.679L28.163,41.75,27.428,43h-1.68l3.231-5.493a1,1,0,0,0-1.724-1.014L23.428,43H11.941A9.01,9.01,0,0,0,3,35H2V32.771A2.973,2.973,0,0,1,2.215,31.656ZM2,42V37H3a7.011,7.011,0,0,1,6.929,6H3A1,1,0,0,1,2,42Zm58.342.211-3.877,1.938A27.137,27.137,0,0,1,44.39,47H5a1,1,0,0,1-1-1V45H45.4a28.837,28.837,0,0,0,11.154-2.231l5.258-2.191A2.984,2.984,0,0,1,60.342,42.211Z"
      />
    </Svg>
  );
};
Shoes.defaultProps = CategoryIconDefaultProps;

const Bulb = ({style, color}: Props) => {
  return (
    <Svg viewBox="0 0 64 64" style={style}>
      <Path
        fill={color}
        d="M44.29,43.09a.689.689,0,0,0-.13.11L44,43H19.6A25.633,25.633,0,0,1,9,24C9,9,19.3,1,32,1S55,9,55,24A25.663,25.663,0,0,1,44.29,43.09Z"
      />
      <Path
        fill={color}
        d="M19.6,43H44l.16.2a3.908,3.908,0,0,0-1.4,2.5L42,51s0,.5-1.25,1S37,53,32,53c-5.31,0-7.8-.56-8.97-1.09C22,51.44,22,51,22,51l-.76-5.3a3.952,3.952,0,0,0-1.53-2.61A1.063,1.063,0,0,1,19.6,43Z"
      />
      <Path
        fill={color}
        d="M32.127,50c-5.621,0-8.257-.56-9.5-1.09a1.988,1.988,0,0,1-1.04-.761L22,51s0,.44,1.03.91C24.2,52.44,26.69,53,32,53c5,0,7.5-.5,8.75-1S42,51,42,51l.361-2.515A3.557,3.557,0,0,1,41.39,49C40.067,49.5,37.42,50,32.127,50Z"
      />
      <Path
        fill="#fff"
        d="M35.748,38h0C24.289,38,15,30.026,15,20.191V18.809C15,9.471,23.378,1.825,34.032,1.074,33.362,1.028,32.685,1,32,1,19.3,1,9,9,9,24A25.633,25.633,0,0,0,19.6,43H44l.16.2a.689.689,0,0,1,.13-.11A26.41,26.41,0,0,0,54.449,27.876C51.1,33.872,43.979,38,35.748,38Z"
      />
      <Path
        fill="#fff"
        d="M34.032,1.074C23.378,1.825,15,9.471,15,18.809v1.382C15,30.026,24.289,38,35.748,38h0c8.231,0,15.352-4.128,18.7-10.124A18.8,18.8,0,0,0,55,24C55,9.809,45.78,1.888,34.032,1.074Z"
      />
      <Path
        fill={color}
        d="M32,57c4.97,0,9,0,9-2v1.44a3.693,3.693,0,0,1-3.03,3.41,4.776,4.776,0,0,1-1.21.15H27.24a4.776,4.776,0,0,1-1.21-.15A3.693,3.693,0,0,1,23,56.44V55C23,57,27.03,57,32,57Z"
      />
      <Path
        fill={color}
        d="M36.76,60a4.776,4.776,0,0,0,1.21-.15L38,60v1a2.006,2.006,0,0,1-2,2H28a2.006,2.006,0,0,1-2-2V60l.03-.15a4.776,4.776,0,0,0,1.21.15Z"
      />
      <Path
        fill={color}
        d="M23.03,51.91C24.2,52.44,26.69,53,32,53c5,0,7.5-.5,8.75-1H41v3c0,2-4.03,2-9,2s-9,0-9-2V52Z"
      />
      <Path
        fill={color}
        d="M27,58V56.9c-2.411-.174-4-.641-4-1.9v1.44a3.693,3.693,0,0,0,3.03,3.41,4.776,4.776,0,0,0,1.21.15H29A2,2,0,0,1,27,58Z"
      />
      <Path
        fill={color}
        d="M37,56.9V58a2,2,0,0,1-2,2h1.76a4.776,4.776,0,0,0,1.21-.15A3.693,3.693,0,0,0,41,56.44V55C41,56.255,39.411,56.722,37,56.9Z"
      />
      <Path
        fill={color}
        d="M27,56.9V52.78a13.3,13.3,0,0,1-3.97-.87L23,52v3C23,56.255,24.589,56.722,27,56.9Z"
      />
      <Path
        fill={color}
        d="M40.75,52a14.451,14.451,0,0,1-3.75.778V56.9c2.411-.174,4-.641,4-1.9V52Z"
      />
      <Path
        fill={color}
        d="M37,58V56.9c-.616.045-1.289.069-2,.084V60A2,2,0,0,0,37,58Z"
      />
      <Path
        fill={color}
        d="M35,56.98c.711-.015,1.384-.039,2-.084h0V52.778h0c-.593.062-1.258.113-2,.151Z"
      />
      <Path
        fill={color}
        d="M40,57.143v-.837c-.033.015-.06.033-.094.047l-.015,0a4.607,4.607,0,0,1-.518.177c-.055.015-.116.029-.173.044-.146.037-.3.071-.458.1l-.209.038q-.257.043-.533.078V59.84a4.4,4.4,0,0,0,1.738-.869A1.977,1.977,0,0,0,40,58Z"
      />
      <Path
        fill={color}
        d="M39.693,52.333c-.121.03-.248.06-.382.09l-.027.006c-.374.081-.8.158-1.284.227V56.8c.184-.024.362-.049.533-.078l.209-.038c.16-.031.312-.065.458-.1.058-.015.118-.029.173-.044a4.607,4.607,0,0,0,.518-.177l.015,0c.035-.015.06-.035.094-.05V52.251l-.233.063Z"
      />
      <Path fill={color} d="M35,56.98c-.638.013-1.3.018-2,.019v3h2V56.98Z" />
      <Path
        fill={color}
        d="M35,56.98V52.929c-.613.031-1.275.053-2,.063V57C33.7,57,34.362,56.993,35,56.98Z"
      />
      <Path fill={color} d="M30,43h4V37.924a23.67,23.67,0,0,1-4-.632Z" />
      <Path
        fill={color}
        d="M22.563,20.281,30,27.718v9.574a23.67,23.67,0,0,0,4,.632V27.718L40.919,20.8c-.235-1.275-.527-2.549-.85-3.8a1.913,1.913,0,0,0-1.35.562L32,24.281l-6.719-6.718a1.915,1.915,0,0,0-1.851-.491c-.378.97-.747,1.95-1.1,2.928A1.847,1.847,0,0,0,22.563,20.281Z"
      />
      <Path
        fill={color}
        d="M41.437,20.281a1.921,1.921,0,0,0,0-2.718h0A1.915,1.915,0,0,0,40.069,17c.323,1.249.615,2.523.85,3.8Z"
      />
      <Path
        fill="#222"
        d="M32,0C17.645,0,8,9.645,8,24c0,.475.126,11.719,11.111,19.892a2.961,2.961,0,0,1,1.142,1.949L21,51.092a1.828,1.828,0,0,0,1,1.4v3.952a4.555,4.555,0,0,0,3,4.1V61a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3v-.453a4.555,4.555,0,0,0,3-4.1V52.492a1.834,1.834,0,0,0,1-1.4l.75-5.25a2.961,2.961,0,0,1,1.142-1.949C55.874,35.719,56,24.475,56,24,56,9.645,46.355,0,32,0Zm5,61a1,1,0,0,1-1,1H28a1,1,0,0,1-1-1v-.021c.08,0,.155.021.235.021h9.53c.08,0,.155-.018.235-.021Zm-.235-2h-9.53a3.351,3.351,0,0,1-2.959-1.531C26.1,58,28.865,58,32,58s5.9,0,7.724-.531A3.351,3.351,0,0,1,36.765,59Zm7.3-17H40v2h2.283a4.962,4.962,0,0,0-.515,1.558l-.738,5.157C40.758,50.948,39.129,52,32,52v2a33.7,33.7,0,0,0,8-.715V55c0,1-5.008,1-8,1s-8,0-8-1V53.287a17.2,17.2,0,0,0,1.858.36l.284-1.98c-2.291-.327-3-.8-3.172-.951l-.738-5.157A4.959,4.959,0,0,0,21.717,44H38V42H35V28.132l7.144-7.144a2.922,2.922,0,1,0-4.132-4.132L32,22.867l-6.012-6.011a2.922,2.922,0,0,0-4.132,4.132L29,28.132V42H19.935A24.884,24.884,0,0,1,10,24C10,10.636,18.636,2,32,2s22,8.636,22,22A24.883,24.883,0,0,1,44.065,42ZM30.707,27.011,23.27,19.574a.922.922,0,0,1,1.3-1.3l6.719,6.718a1,1,0,0,0,1.414,0l6.719-6.718a.922.922,0,1,1,1.3,1.3l-7.437,7.437a1,1,0,0,0-.293.707V42H31V27.718A1,1,0,0,0,30.707,27.011Z"
      />
      <Path
        fill="#222"
        d="M27.926,53.865q.924.069,2.043.1l.062-2c-.716-.022-1.366-.056-1.957-.1Z"
      />
      <Path
        fill="#222"
        d="M51,24A19.021,19.021,0,0,0,32,5V7A17.019,17.019,0,0,1,49,24Z"
      />
      <Rect width="2" height="2" x="49" y="26" />
    </Svg>
  );
};
Bulb.defaultProps = CategoryIconDefaultProps;

const Headset = ({style, color = THEME.COLOR.Primary}: Props) => {
  return (
    <Svg viewBox="0 0 100 100" style={style}>
      <Path
        fill="#1f212b"
        d="M76.654,85.577c-0.8,0-1.552-0.312-2.118-0.878c-0.981-0.981-1.167-2.481-0.451-3.646 c4.594-7.48,7.022-16.958,7.022-27.407c0-16.759-14.246-30.917-31.107-30.917S18.892,36.888,18.892,53.646 c0,10.421,2.435,19.891,7.041,27.387c0.715,1.166,0.53,2.665-0.451,3.646c-0.567,0.566-1.319,0.878-2.119,0.878c0,0,0,0,0,0 c-1.044,0-1.995-0.528-2.541-1.413c-5.754-9.324-8.795-21.562-8.795-35.392C12.027,28.289,29.416,11,49.999,11 s37.972,17.289,37.972,37.753c0,13.855-3.035,26.1-8.775,35.409C78.649,85.049,77.699,85.577,76.654,85.577z M49.999,20.729 c17.946,0,33.107,15.074,33.107,32.917c0,10.818-2.53,20.658-7.318,28.454c-0.226,0.367-0.158,0.865,0.162,1.185 c0.433,0.434,1.225,0.341,1.543-0.173c5.546-8.993,8.478-20.875,8.478-34.359C85.971,29.373,69.498,13,49.999,13 C30.5,13,14.027,29.373,14.027,48.753c0,13.458,2.938,25.333,8.497,34.341c0.179,0.291,0.493,0.464,0.839,0.464h0 c0.265,0,0.516-0.104,0.704-0.292c0.319-0.319,0.387-0.818,0.161-1.186c-4.799-7.811-7.336-17.643-7.336-28.434 C16.892,35.804,32.053,20.729,49.999,20.729z"
      />
      <Path
        fill="#1f212b"
        d="M82.22,30.504h-1.104c-1.982,0-3.823-0.839-5.05-2.302c-2.51-2.992-5.472-5.519-8.803-7.511 c-0.237-0.142-0.314-0.448-0.173-0.686c0.142-0.237,0.449-0.315,0.686-0.172c3.428,2.049,6.475,4.648,9.057,7.726 c1.037,1.235,2.598,1.944,4.284,1.944h1.104c0.276,0,0.5,0.224,0.5,0.5S82.497,30.504,82.22,30.504z M18.882,30.504h-1.104 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.104c1.686,0,3.247-0.709,4.283-1.944c6.748-8.042,16.529-12.654,26.834-12.654 c1.146,0,2.305,0.058,3.447,0.172c0.275,0.027,0.476,0.271,0.448,0.547c-0.027,0.274-0.266,0.484-0.547,0.447 c-1.109-0.11-2.235-0.166-3.348-0.166c-10.009,0-19.511,4.482-26.068,12.297C22.704,29.665,20.864,30.504,18.882,30.504z M63.059,18.515c-0.064,0-0.129-0.013-0.192-0.038c-0.303-0.126-0.609-0.248-0.916-0.366c-0.258-0.099-0.387-0.387-0.289-0.646 c0.099-0.258,0.389-0.385,0.646-0.288c0.317,0.12,0.631,0.246,0.943,0.376c0.255,0.106,0.376,0.399,0.27,0.654 C63.44,18.398,63.254,18.515,63.059,18.515z M60.241,17.484c-0.05,0-0.101-0.008-0.151-0.023c-1.563-0.494-3.175-0.876-4.79-1.135 c-0.272-0.044-0.458-0.301-0.415-0.573c0.043-0.273,0.299-0.457,0.573-0.415c1.663,0.267,3.323,0.66,4.933,1.17 c0.263,0.083,0.409,0.364,0.326,0.627C60.65,17.349,60.453,17.484,60.241,17.484z"
      />
      <Path
        fill="#1f212b"
        d="M18.56,59.559c-4.17-0.32-6.216-5.503-6.083-15.406l1,0.014c-0.124,9.149,1.66,14.127,5.159,14.395 L18.56,59.559z"
      />
      <Path
        fill="#1f212b"
        d="M81.116,59.558l-0.076-0.997c3.498-0.268,5.282-5.245,5.158-14.395l1-0.014 C87.332,54.056,85.286,59.238,81.116,59.558z"
      />
      <Path
        fill={color}
        d="M43.83,87.842L39.771,90L24.233,60.777l4.059-2.158c2.242-1.192,5.025-0.341,6.217,1.901	l11.222,21.106C46.923,83.867,46.072,86.65,43.83,87.842z"
      />
      <Path
        fill={color}
        d="M27.769,87.01c4.052-0.253,8.048,0.856,12.002,2.99L24.233,60.777	c-0.248,4.317-1.649,8.195-4.233,11.622C21.208,77.151,23.875,82.029,27.769,87.01z"
      />
      <Path
        fill="#1f212b"
        d="M42.667,89.091c-0.179,0-0.352-0.097-0.442-0.266l-1.455-2.735c-0.13-0.243-0.037-0.546,0.207-0.676 c0.243-0.131,0.546-0.037,0.676,0.207l1.455,2.735c0.13,0.243,0.037,0.546-0.207,0.676C42.827,89.072,42.746,89.091,42.667,89.091z M36.518,77.526c-0.179,0-0.352-0.096-0.442-0.266l-0.47-0.883c-0.13-0.243-0.037-0.546,0.207-0.676 c0.243-0.131,0.546-0.038,0.676,0.207l0.47,0.883c0.13,0.243,0.037,0.546-0.207,0.676C36.678,77.508,36.597,77.526,36.518,77.526z M35.109,74.877c-0.179,0-0.352-0.097-0.442-0.266l-2.347-4.414c-0.13-0.243-0.037-0.546,0.207-0.676 c0.243-0.132,0.546-0.037,0.676,0.207l2.347,4.414c0.13,0.243,0.037,0.546-0.207,0.676C35.269,74.858,35.188,74.877,35.109,74.877z M31.823,68.696c-0.179,0-0.352-0.097-0.442-0.266l-4.695-8.829c-0.13-0.243-0.037-0.546,0.207-0.676 c0.243-0.132,0.546-0.037,0.676,0.207l4.695,8.829c0.13,0.243,0.037,0.546-0.207,0.676C31.983,68.678,31.902,68.696,31.823,68.696z"
      />
      <Path
        fill="#1f212b"
        d="M40.113,90.443c-0.179,0-0.352-0.097-0.442-0.266L24.074,60.843 c-0.13-0.243-0.037-0.546,0.207-0.676c0.243-0.132,0.546-0.037,0.676,0.207l15.598,29.335c0.13,0.243,0.037,0.546-0.207,0.676 C40.273,90.425,40.192,90.443,40.113,90.443z"
      />
      <Path
        fill="#1f212b"
        d="M39.771,91c-0.163,0-0.327-0.04-0.475-0.12c-4.01-2.162-7.729-3.104-11.465-2.871 c-0.334,0.014-0.647-0.122-0.851-0.382c-4.074-5.213-6.749-10.254-7.95-14.982c-0.075-0.294-0.012-0.606,0.171-0.849 c2.44-3.235,3.797-6.962,4.033-11.077c0.02-0.349,0.221-0.661,0.529-0.825l4.059-2.157c0.807-0.43,1.714-0.656,2.624-0.656 c2.076,0,3.971,1.138,4.945,2.97l11.222,21.105c0.702,1.32,0.848,2.834,0.411,4.264c-0.438,1.431-1.405,2.604-2.725,3.306 l-4.058,2.158C40.094,90.961,39.933,91,39.771,91z M28.909,85.976c3.504,0,7.155,0.973,10.861,2.893l3.59-1.909 c0.849-0.451,1.47-1.205,1.751-2.124c0.281-0.919,0.188-1.893-0.264-2.74L33.626,60.989C33,59.812,31.782,59.08,30.447,59.08 c-0.592,0-1.159,0.142-1.685,0.422l-3.569,1.897c-0.334,4.128-1.712,7.894-4.103,11.207c1.153,4.206,3.557,8.703,7.151,13.38 C28.464,85.979,28.687,85.976,28.909,85.976z"
      />
      <Path
        fill={color}
        d="M56.17,87.842L60.229,90l15.538-29.223l-4.059-2.158c-2.242-1.192-5.025-0.341-6.217,1.901	L54.269,81.625C53.077,83.867,53.928,86.65,56.17,87.842z"
      />
      <Path
        fill={color}
        d="M72.231,87.01c-4.052-0.253-8.048,0.856-12.002,2.99l15.538-29.223	c0.248,4.317,1.649,8.195,4.233,11.622C78.792,77.151,76.125,82.029,72.231,87.01z"
      />
      <Path
        fill="#1f212b"
        d="M57.333,89.091c-0.079,0-0.16-0.019-0.234-0.059c-0.244-0.13-0.336-0.433-0.207-0.676l1.455-2.735 c0.129-0.243,0.432-0.337,0.676-0.207c0.244,0.13,0.336,0.433,0.207,0.676l-1.455,2.735C57.685,88.994,57.512,89.091,57.333,89.091 z M63.482,77.526c-0.079,0-0.16-0.019-0.234-0.059c-0.244-0.13-0.336-0.433-0.207-0.676l0.47-0.883 c0.129-0.245,0.433-0.337,0.676-0.207s0.336,0.433,0.207,0.676l-0.47,0.883C63.834,77.431,63.661,77.526,63.482,77.526z M64.891,74.877c-0.079,0-0.16-0.019-0.234-0.059c-0.244-0.13-0.336-0.433-0.207-0.676l2.347-4.414 c0.129-0.243,0.433-0.338,0.676-0.207c0.244,0.13,0.336,0.433,0.207,0.676l-2.347,4.414C65.243,74.78,65.07,74.877,64.891,74.877z M68.177,68.696c-0.079,0-0.16-0.019-0.234-0.059c-0.244-0.13-0.336-0.433-0.207-0.676l4.695-8.829 c0.129-0.244,0.432-0.338,0.676-0.207c0.244,0.13,0.336,0.433,0.207,0.676l-4.695,8.829C68.529,68.6,68.356,68.696,68.177,68.696z"
      />
      <Path
        fill="#1f212b"
        d="M59.887,90.443c-0.079,0-0.16-0.019-0.234-0.059c-0.244-0.13-0.336-0.433-0.207-0.676l15.598-29.335 c0.129-0.243,0.432-0.339,0.676-0.207c0.244,0.13,0.336,0.433,0.207,0.676L60.329,90.178 C60.239,90.347,60.066,90.443,59.887,90.443z"
      />
      <Path
        fill="#1f212b"
        d="M60.229,91c-0.161,0-0.323-0.039-0.47-0.117L55.7,88.725c-1.32-0.701-2.287-1.875-2.725-3.306 c-0.437-1.43-0.291-2.943,0.411-4.264L64.608,60.05c0.974-1.832,2.869-2.97,4.945-2.97c0.91,0,1.817,0.227,2.625,0.656 l4.059,2.157c0.309,0.164,0.509,0.477,0.529,0.825c0.236,4.115,1.593,7.842,4.033,11.077c0.183,0.242,0.246,0.555,0.171,0.849 c-1.201,4.729-3.876,9.77-7.95,14.982c-0.203,0.26-0.514,0.397-0.851,0.382c-3.726-0.229-7.454,0.709-11.465,2.871 C60.555,90.96,60.392,91,60.229,91z M69.553,59.08c-1.335,0-2.553,0.731-3.179,1.909L55.152,82.095 c-0.451,0.848-0.545,1.821-0.264,2.74c0.281,0.919,0.902,1.673,1.75,2.124l3.591,1.909c3.941-2.042,7.796-2.997,11.529-2.882 c3.595-4.677,5.998-9.174,7.151-13.38c-2.391-3.313-3.769-7.079-4.103-11.207l-3.569-1.897 C70.712,59.222,70.145,59.08,69.553,59.08z"
      />
    </Svg>
  );
};
Headset.defaultProps = CategoryIconDefaultProps;

const Gamepad = ({style, color = THEME.COLOR.Primary}: Props) => {
  return (
    <Svg viewBox="0 0 128 128" style={style}>
      <Path
        fill="#fff"
        d="M65.7,93.1c4.9,0,13.6,0.6,20.2,4.5c13.9,8.3,17.2,18.8,24.1,18.3c7.1-0.5,11-10.3,12.9-20.6 c4.8-26.6-8.5-75.1-32.1-71.7c-6.7,0.9-19.2,11.5-27,11.5h0c-7.7,0-20.3-10.5-27-11.5C13.3,20.3,0,68.8,4.8,95.4 c1.9,10.3,5.8,20.1,12.9,20.6c6.9,0.5,10.2-10,24.1-18.3c6.6-4,15.3-4.6,20.2-4.5H65.7z"
      />
      <Circle cx="36" cy="63" r="14" fill={color} />
      <Path
        fill={color}
        d="M82,79h-8c-5.5,0-10,4.5-10,10v4.1h1.7c4.9,0,13.6,0.6,20.2,4.5c13.9,8.3,17.2,18.8,24.1,18.3 c7.1-0.5,11-10.3,12.9-20.6c3.4-18.5-2-47.5-13.5-62.4H102c-5.5,0-10,4.5-10,10v26C92,74.5,87.5,79,82,79z"
      />
      <Path
        fill="#222"
        d="M36,80c-9.4,0-17-7.6-17-17s7.6-17,17-17s17,7.6,17,17S45.4,80,36,80z M36,52c-6.1,0-11,4.9-11,11 s4.9,11,11,11s11-4.9,11-11S42.1,52,36,52z"
      />
      <Path
        fill="#222"
        d="M109.5,119c-4.7,0-7.9-3.4-11.7-7.4c-3.2-3.4-7.3-7.6-13.5-11.4c-6.1-3.6-14.3-4.1-18.7-4.1h-3.6 c-3.9,0-9.7,0.4-14.9,2.3c-1.6,0.6-3.3-0.2-3.9-1.8s0.2-3.3,1.8-3.9c6.1-2.3,12.6-2.7,17.1-2.7h3.6c4.9,0,14.4,0.6,21.8,4.9 c7,4.2,11.3,8.7,14.8,12.4c3.5,3.7,5.4,5.6,7.6,5.5c4.4-0.3,8.1-6.9,10.2-18.1c4.1-22.5-4.7-51.7-15.2-62.6 c-4.2-4.4-8.8-6.3-13.5-5.6c-2.4,0.3-6.5,2.6-10.4,4.8C75,34.7,69,38,64,38.1c0,0-0.1,0-0.1,0c-5.1,0-11.1-3.4-17-6.7 c-3.9-2.2-8-4.5-10.4-4.8c-4.7-0.7-9.3,1.2-13.5,5.6C12.4,43.2,3.7,72.3,7.8,94.8c2,11.2,5.7,17.8,10.2,18.1 c2.1,0.1,4.1-1.8,7.6-5.5c1.3-1.3,2.7-2.9,4.4-4.4c1.2-1.1,3.1-1.1,4.2,0.1c1.1,1.2,1.1,3.1-0.1,4.2c-1.5,1.5-2.9,2.9-4.2,4.2 c-3.9,4.1-7.3,7.7-12.3,7.3c-7.6-0.5-13-8.5-15.6-23C0,85.8,0.7,72.6,3.6,59.8c3.2-13.7,8.5-25,15.1-31.8c5.6-5.8,12-8.3,18.7-7.4 c3.5,0.5,7.9,2.9,12.5,5.5c4.9,2.7,10.4,5.9,14,5.9c3.5,0,9.1-3.1,14.1-5.9c4.6-2.6,9-5,12.5-5.5c6.7-0.9,13.1,1.6,18.7,7.4 c6.6,6.8,11.9,18.1,15.1,31.8c3,12.8,3.6,25.9,1.7,36.1c-2.6,14.5-8.1,22.5-15.6,23C110,119,109.7,119,109.5,119z"
      />
      <Path
        fill="#222"
        d="M105,60H95V50c0-1.7-1.3-3-3-3s-3,1.3-3,3v10H79c-1.7,0-3,1.3-3,3s1.3,3,3,3h10v10c0,1.7,1.3,3,3,3s3-1.3,3-3 V66h10c1.7,0,3-1.3,3-3S106.7,60,105,60z"
      />
    </Svg>
  );
};
Gamepad.defaultProps = CategoryIconDefaultProps;

export {Stileto, Shoes, Bulb, Headset, Gamepad};
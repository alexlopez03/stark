export const Icons = ({ type, ...props }) => {
  const Component = type ? icons[type] : <span />;
  return <Component {...props} />;
};

// Weight: 300, Grade: 0, Optical Size: 24
const icons = {
  filter_none: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 -960 960 960" {...props}>
      <path
        d="M322.308-260.001q-30.308 0-51.307-21-21-21-21-51.308v-455.382q0-30.308 21-51.308 20.999-21 51.307-21h455.383q30.307 0 51.307 21 21 21 21 51.308v455.382q0 30.308-21 51.308t-51.307 21H322.308Zm0-59.999h455.383q4.615 0 8.462-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.462-3.846H322.308q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v455.382q0 4.616 3.847 8.463 3.846 3.846 8.462 3.846ZM182.309-120.003q-30.307 0-51.307-21-21-21-21-51.307v-515.381h59.999v515.381q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h515.382v59.998H182.309ZM309.999-800v480-480Z"
        fill="currentColor"
      />
    </svg>
  ),
};

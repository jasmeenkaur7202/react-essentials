export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      {/* using identifier  inside a component to dynamically render diff HTML elements...*/}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  )
}
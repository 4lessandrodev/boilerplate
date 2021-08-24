import * as S from './styles';

const Main = ({
	title = 'TEMPLATE READY',
	description = 'All ok and running...'
}) => (
	<S.Wrapper>
		<S.Logo
			src="/img/rocket.png"
			alt="Image with a rocket in black and white and two planets beside"
		/>
		<S.Title>{title}</S.Title>
		<S.Description>{description}</S.Description>
		<S.Illustration
			src="/img/logo.jpg"
			alt="Image with word answer and a number 42 beside"
		/>
	</S.Wrapper>
);

export default Main;

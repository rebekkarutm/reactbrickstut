import { validate } from "email-validator";
import { Text, Link, types } from "react-bricks/rsc";

interface ButtonProps {
    buttonText: types.TextValue
    buttonPath: string
}

const Button: types.Brick<ButtonProps> = ({
    buttonText,
    buttonPath,
}) => {
    return (
        <Link
            href={buttonPath}
            className="py-2 px-6 text-white text-center bg-sky-500"
        >
            <Text
                propName="buttonText"
                value={buttonText}
                placeholder="Action"
                renderBlock={({ children }) => <span>{children}</span>}
            />
        </Link>
    )
}

Button.schema = {
    name: 'button',
    label: 'Button',

    getDefaultProps: () => ({
        buttonText: 'Submit',
    }),

    sideEditProps: [
        {
            name: 'buttonPath',
            label: 'Path or URL',
            type: types.SideEditPropType.Text,
            validate: (value) =>
                value?.startsWith('/') ||
                value?.startsWith('https://') ||
                'Please, enter a valid URL',
        }
    ]
}

export default Button
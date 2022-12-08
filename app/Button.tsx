import { cva, VariantProps } from "class-variance-authority";

const button = cva("rounded-md px-4 py-2", {
  variants: {
    intent: {
      primary: "bg-blue-500 text-white",
      secondary: "border border-white/50 text-white",
    },
  },
});

interface ButtonProps extends VariantProps<typeof button> {
  title: string;
}

const Button = ({ intent, title }: ButtonProps) => {
  return <button className={button({ intent })}>{title}</button>;
};

export default Button;

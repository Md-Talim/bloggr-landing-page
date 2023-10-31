interface Props {
  label: string;
  description: string;
}

const Description = ({ label, description }: Props) => (
  <div className="space-y-8">
    <h3 className="text-3xl xl:text-4xl font-semibold text-veryDarkBlue">
      {label}
    </h3>
    <p className="text-veryDarkGrayishBlue max-w-[55ch] !leading-loose md:text-lg xl:text-xl">
      {description}
    </p>
  </div>
);

export default Description;

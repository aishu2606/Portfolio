import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, subtitle, image, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-4 space-y-4">
        {subtitle ? <h2 className="">{subtitle}</h2> : null}

        {image ? (
          <img
            src={image}
            alt={name || "Text file image"}
            className="block w-full h-auto max-h-96 object-contain rounded-lg bg-gray-50"
          />
        ) : null}

        {Array.isArray(description) ? (
          <div className="space-y-3">
            {description.map((paragraph, index) => (
              <p
                key={`${name || "txtfile"}-${index}`}
                className="text-sm text-gray-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;

import { types, Text, RichText, Link, Image } from "react-bricks/rsc";

export interface ThumbnailProps {
    title: types.TextValue
    description: types.TextValue
    image: types.IImageSource
    hasShadow: boolean
    bgColor: types.IColor & { className: string }
}

const Thumbnail: types.Brick<ThumbnailProps> = ({ title, description, image, hasShadow, bgColor }) => {
    return (
        <div className={`my-6 mx-6 p-6 text-center w-1/3 border rounded-lg ${
                hasShadow ? 'shadow-xl' : ''
        } ${bgColor?.className}`}
        >
            <Image
                propName="image"
                source={image}
                alt="Fallback alt tagt"
                maxWidth={600}
                imageClassName="mb-6"
            />
            <Text
                propName='title'
                value={title}
                renderBlock={({ children }) => <h1 className='text-2xl font-bold'>{children}</h1>}
                placeholder="Type a title..."
                />
                <RichText
                    propName='description'
                    value={description}
                    renderBlock={({ children }) => (
                        <p className='text-lg text-gray-500'>{children}</p>
                    )}
                    placeholder='Type a description'
                    allowedFeatures={[
                        types.RichTextFeatures.Bold,
                        types.RichTextFeatures.Highlight,
                        types.RichTextFeatures.Link,
                    ]}
                    renderHighlight={({ children }) => (
                        <span className="px-1 rounded bg-blue-200 text-blue-900">
                            {children}
                        </span>
                    )}
                    renderLink={({ children, href, target, rel }) => (
                        <Link
                            href={href}
                            target={target}
                            rel={rel}
                            className='text-sky-500 hover:text-sky-600 transition-colors'
                        >
                            {children}
                        </Link>
                    )}
                />
        </div>
    )
}

Thumbnail.schema = {
    name: 'thumbnail',
    label: 'Thumbnail',
    hideFromAddMenu: true,
    getDefaultProps: () => ({
            title: "Hello world!",
            description: [
              {
                type: "paragraph",
                children: [
                  {
                    text: ""
                  },
                  {
                    type: "link",
                    data: {
                      url: "https://bilastaedasjodur.reykjavik.is/#/protest",
                      isTargetBlank: false
                    },
                    children: [
                      {
                        text: "Not another"
                      }
                    ]
                  },
                  {
                    text: " "
                  },
                  {
                    text: "Lorem ipsum",
                    highlight: true
                  }
                ]
              }
            ],
            image: {
              hashId: "1Q0ullVoBvQ2oMF",
              src: "https://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/original/hj6fr2u0uU3QbNp.webp",
              srcSet: "https://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-1080.webp 1080w,\nhttps://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-900.webp 900w,\nhttps://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-600.webp 600w,\nhttps://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-300.webp 300w,\nhttps://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-150.webp 150w",
              type: "image/webp",
              placeholderSrc: "https://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/placeholder/hj6fr2u0uU3QbNp.jpg",
              fallbackSrc: "https://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/original/hj6fr2u0uU3QbNp.jpg",
              fallbackSrcSet: "https://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-1080.jpg 1080w,\nhttps://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-900.jpg 900w,\nhttps://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-600.jpg 600w,\nhttps://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-300.jpg 300w,\nhttps://assets.reactbricks.com/YTR7wcXSrhCw3Tb/images/src_set/hj6fr2u0uU3QbNp-150.jpg 150w",
              fallbackType: "image/jpeg",
              height: 1029,
              width: 1080,
              alt: "man in black shorts under water",
              seoName: "man-in-black-shorts-under-water-pxugm0vtouq",
              crop: {
                x: 0,
                y: 0,
                width: 1080,
                height: 1029
              },
              transform: {
                rotate: 0,
                flip: {
                  horizontal: false,
                  vertical: false
                }
              }
            },
            hasShadow: true,
            bgColor: { color: '#ffffff', className: 'bg-white' }
    }),
    sideEditProps: [
        {
            name: 'fontSize',
            label: 'Font Size',
            type: types.SideEditPropType.Number,
            validate: (value, allProps) => value >= 12 && value <= 32
        },
        {
            groupName: 'Layout',
            defaultOpen: true,
            props: [
                {
                    name: 'hasShadow',
                    label: 'Shadow',
                    type: types.SideEditPropType.Boolean,
                },
                {
                    name: 'bgColor',
                    label: 'Background',
                    type: types.SideEditPropType.Select,
                    selectOptions: {
                        display: types.OptionsDisplay.Color,
                        options: [
                            {
                                label: 'White',
                                value: { color: '#ffffff', className: 'bg-white' },
                            },
                            {
                                label: 'Light blue',
                                value: { color: '#eff6ff', className: 'bg-blue-50' },
                            },
                        ],
                    },
                },
            ],
        }
    ],
}

export default Thumbnail
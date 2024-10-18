import React from "react";
import { types, File } from "react-bricks/rsc";

interface CatalogDownloadProps {
    file: types.IFileSource
}

const CatalogDownload: types.Brick<CatalogDownloadProps> = ({ file }) => {
    return (
        <div>
            <File
                propName="file"
                source={file}
                allowedExtensions={['.pdf']}
                renderBlock={(file) => {
                    return file ? (
                        <a href={file.url} className="flex font-semibold h-full items-center">
                            Download "{file.name}" <small>({file.size.toFixed(2)} MB)</small>
                        </a>
                    ) : (
                        <div className="flex font-semibold h-full items-center">
                            No catalogs yet.
                        </div>
                    )
                }}
            />
        </div>
    )
}

CatalogDownload.schema = {
    name: 'catalog-download',
    label: 'Catalog Download',
}
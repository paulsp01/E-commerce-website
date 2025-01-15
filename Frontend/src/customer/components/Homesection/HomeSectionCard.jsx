import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const HomeSectionCard = ({ image, brand, title }) => {
    return (
        <div className="p-4">
            <Card className="w-56 h-72 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                <CardHeader shadow={false} floated={false} className="h-48 p-0">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-contain"
                    />
                </CardHeader>
                <CardBody className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium text-lg">
                            {brand}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="text-xs opacity-75"
                    >
                        {title}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
}

export default HomeSectionCard;
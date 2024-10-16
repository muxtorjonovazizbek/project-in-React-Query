import { 
    TagOutlined,
    AppstoreOutlined, 
    AppstoreAddOutlined, 
    SolutionOutlined, 
    CodeSandboxOutlined,
} from "@ant-design/icons";


const admin = [
    {
        content: "Product",
        path: "/layout",
        icon: <CodeSandboxOutlined/>
    },
    {
        content: "Category",
        path: 'layout/category',
        icon: <SolutionOutlined/>
    },
    {
        content: "Brands",
        path: 'layout/brands',
        icon: <AppstoreAddOutlined/>
    },
    {
        content: "BrandCategory",
        path: 'layout/brand-category',
        icon: <AppstoreOutlined/>
    },
    {
        content: "Adds",
        path: 'layout/adds',
        icon: <TagOutlined/>
    },
    
]

export { admin }
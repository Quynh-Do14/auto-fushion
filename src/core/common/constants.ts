import { ROUTE_PATH } from "./appRouter"

export default class Constants {
  static Menu = class {
    static PublicList = [
      {
        id: 1,
        text: 'Trang chủ',
        url: ROUTE_PATH.HOMEPAGE,
      },
      {
        id: 2,
        text: 'Danh mục',
        url: ROUTE_PATH.CATEGORY,

      },
      {
        id: 3,
        text: 'Sản phẩm',
        url: ROUTE_PATH.PRODUCT,

      },
      {
        id: 4,
        text: 'Tin tức',
        url: ROUTE_PATH.BLOG,
      },
    ]
    static PrivateList = [
      {
        id: 1,
        text: 'Quản lý người dùng',
        url: ROUTE_PATH.USER_MANAGEMENT,
        icon: 'fas fa-users'
      },
      {
        id: 2,
        text: 'Quản lý thương hiệu',
        url: ROUTE_PATH.BRAND_MANAGEMENT, // nếu bạn có ROUTE_PATH này riêng
        icon: 'fas fa-tags'
      },
      {
        id: 3,
        text: 'Quản lý danh mục sản phẩm',
        url: ROUTE_PATH.CATEGORY_PRODUCT_MANAGEMENT,
        icon: 'fas fa-th-large'
      },
      {
        id: 4,
        text: 'Quản lý sản phẩm',
        url: ROUTE_PATH.PRODUCT_MANAGEMENT,
        icon: 'fas fa-boxes'
      },
      {
        id: 5,
        text: 'Quản lý danh mục tin tức',
        url: ROUTE_PATH.CATEGORY_BLOG_MANAGEMENT,
        icon: 'fas fa-folder-open'
      },
      {
        id: 6,
        text: 'Quản lý tin tức',
        url: ROUTE_PATH.BLOG_MANAGEMENT,
        icon: 'fas fa-newspaper'
      },
    ]

  }


  static DefaultURL = 'idai.vn/'
  static TOKEN = 'token'
  static DEBOUNCE_SEARCH = 800

  static Params = class {
    static limit = 'limit'
    static page = 'page'
    static searchName = 'searchName'
    static search = 'search'
    static idDanhMuc = 'idDanhMuc'
    static parentId = 'parentId'
  }

  static PaginationClientConfigs = class {
    static Size = 8
    static LimitSize = 60
    static AllSize = 9000
    static PageSizeList = [
      { label: '8', value: 8 },
      { label: '16', value: 16 },
      { label: '48', value: 48 }
    ]
  }

  static PaginationConfigs = class {
    static Size = 10
    static SizeSearchPage = 8
    static LimitSize = 60
    static AllSize = 9000
    static PageSizeList = [
      { label: '10', value: 10 },
      { label: '20', value: 20 },
      { label: '50', value: 50 }
    ]
  }

  static UseParams = class {
    static Id = ':id'
  }
  static Roles = class {
    static List = [
      {
        label: 'Quản trị viên',
        value: 1
      },
      {
        label: 'Seller',
        value: 2
      },
      {
        label: 'Viết bài',
        value: 3
      },
      {
        label: 'Người dùng',
        value: 4
      }
    ]
  }
  static AdminStatusConfig = class {
    static Show = [
      {
        label: 'Hiển thị',
        value: true
      },
      {
        label: 'Không hiển thị',
        value: false
      }
    ]
    static TypeBlog = [
      {
        label: 'Tin chính',
        value: true
      },
      {
        label: 'Tin khác',
        value: false
      }
    ]
    static Approve = [
      {
        label: 'Đã duyệt',
        value: "true"
      },
      {
        label: 'Chưa duyệt',
        value: "false"
      }
    ]
  }
}

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
        id: 4 ,
        text: 'Tin tức',
        url: ROUTE_PATH.BLOG,
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

  static TabSelect = class {
    static List = [
      { label: 'Cá nhân', value: 1 },
      { label: 'Gian hàng', value: 2 }
    ]
  }

  static Gender = class {
    static MALE = class {
      static value = true
      static label = 'Nam'
    }
    static FEMALE = class {
      static value = false
      static label = 'Nữ'
    }
    static List = [
      { label: 'Nam', value: true },
      { label: 'Nữ', value: false }
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

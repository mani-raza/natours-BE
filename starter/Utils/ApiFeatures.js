class ApiFeatures {
    constructor(query, queryString) {
        this.query = query; 
        this.queryString = queryString;
    }

    filter() {
            // filtering the tour
    const queryObj = {...this.queryString};
    const excludedFilters = ['sort', 'page', 'limit', 'fields'];
    excludedFilters.forEach(el => {delete queryObj[el]});

    // advanced filtering
    let querystr = JSON.stringify(queryObj);
    querystr =  querystr.replace(/\b(gte|lte|gt|lt)\b/g, matched => (`$${matched}`));

     this.query = this.query.find(JSON.parse(querystr));
     return this;
    }

    sort() {
             // sorting
     if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' ');
        this.query = this.query.sort(sortBy);
      } else {
        this.query = this.query.sort('-createdAt');
      }
      return this;
    }

    limit() {
             // limiting fields
     if (this.queryString.fields) {
        const fieldsBy = this.queryString.fields.split(',').join(' ');
        this.query = this.query.select(fieldsBy);
      } else {
        this.query = this.query.select('-__v');
      }
      return this;
    }

    paginate() {
     // pagination 
    const page = this.queryString.page * 1 || 1
    const limit = this.queryString.limit * 1 || 100
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
    }
}

module.exports = ApiFeatures;
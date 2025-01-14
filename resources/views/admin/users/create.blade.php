@extends('welcome')
@section('content')

 <div class="page-header">
    <div class="row">


    </div>
    <div class="page-title">


    </div>
    <div class="page-action">
        <button   class="btn btn-primary m-3">Register</button>
    </div>



 </div>

    <div >

        <div class="form-section">
            <div>
                <form method="POST" action="{{ route('admin.users.store') }}"> <!-- Change the action to the relevant route -->
                    @csrf
                    <div class="row add-container justify-content-start">
                        @if ($errors->any())
                            <div class="col-12">
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        @endif

                        <div class="col-lg-4 col-sm-6">
                            <div class="control-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" required value="{{ old('name') }}">
                                @error('name')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="control-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" class="form-control" required value="{{ old('email') }}">
                                @error('email')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="control-group">
                                <label for="phone">Phone</label>
                                <input type="text" name="phone" class="form-control" value="{{ old('phone') }}">
                                @error('phone')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="control-group">
                                <label for="type_user">User Type</label>
                                <select class="form-control" name="type_user" required>
                                    <option value="1" {{ old('type_user') == 1 ? 'selected' : '' }}>Admin</option>
                                    <option value="0" {{ old('type_user') == 0 ? 'selected' : '' }}>User</option>
                                </select>
                                @error('type_user')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="control-group">
                                <label for="status">Status</label>
                                <select class="form-control" name="status" required>
                                    <option value="1" {{ old('status') == 1 ? 'selected' : '' }}>Active</option>
                                    <option value="0" {{ old('status') == 0 ? 'selected' : '' }}>Inactive</option>
                                </select>
                                @error('status')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="control-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" class="form-control" required>
                                @error('password')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-12 text-right">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>

                </form>
            </div>


    </div>




<style>
    .selectedItem {
        background-color: #081aa0;
        color: #fff;
    }


    </style>
@endsection

@section('js')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
<script>


</script>
@endsection

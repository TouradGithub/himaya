@extends('welcome')
@section('content')

 <div class="page-header">

    <div class="page-title">

    <div>Users</div>
    </div>
    <div class="page-action">

    </div>



 </div>






<div >

    <div class="modal-body">
        <div class="pagination mb-10">
            {{ $users->links() }}
        </div>
        <div class="table m-0">

            <div class="grid-container">
                <div class="offset">


                    <div class="table">
                        <table class="table">
                            <thead>
                            <tr>
                                <th class="w-30">Name</th>
                                <th class="w-20">Phone</th>
                                <th class="w-20">Type</th>
                                <th class="w-20">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($users->items() as $user)
                                <tr>
                                    <td class="auto-width">
                                        <div class="control-group">
                                            {{ $user->name }}
                                        </div>
                                    </td>
                                    <td class="auto-width">
                                        <div class="control-group">
                                            {{ $user->phone }}
                                        </div>
                                    </td>
                                    <td class="auto-width">
                                        <div class="control-group">
                                            {{ $user->type_user }}
                                        </div>
                                    </td>
                                    <td class="auto-width">
                                        <div class="control-group">
                                            {{$user->status}}
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
<script>

    app.mount("#app");
</script>
@endsection

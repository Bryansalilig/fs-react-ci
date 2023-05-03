<?php
namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;
use App\Libraries\Hash;

class Auth extends BaseController
{

    public function __construct()
    {
        helper(['url', 'form']);
    }

    use ResponseTrait;
    public function index()
    {
        $model = new UserModel();
        $data = $model->findAll();
        return $this->respond($data);
    }

    public function show($id = null){
        $model = new UserModel();
        $data = $model->find(['id' => $id]);
        if(!$data) return $this->failNotFound('No Data Founds');
        return $this->respond($data[0]);
    }

    public function create()
    {
        // $validated = $this->validate([
        //     'name' => 'required',
        //     'email' => 'required|valid_email',
        //     'password' => 'required|min_length[5]|max_length[15]',
        //     'cpassword' => 'required|min_length[5]|max_length[15]|matches[password]',
        // ]);

        // $validated = $this->validate([
        //     'uname' => [
        //         'rules' => 'required',
        //         'errors' => [
        //             'required' => 'Your fullname is required',
        //         ]
        //     ],
        //     'email' => [
        //         'rules' => 'required|valid_email',
        //         'errors' => [
        //             'required' => 'Your email is required',
        //             'valid_email' => 'Email is already used',
        //         ],
        //     ],
        //     'password' => [
        //         'rules' => 'required|min_length[5]|max_length[15]',
        //         'errors' => [
        //             'required' => 'Your password is required',
        //             'min_length' => 'Password must be 5 character long',
        //             'max_length' => 'Password cannot be longer than 15 characters'
        //         ],
        //     ],
        //     'cpassword' => [
        //         'rules' => 'required|min_length[5]|max_length[15]|matches[password]',
        //         'errors' => [
        //             'required' => 'Your confirm password is required',
        //             'min_length' => 'Password must be 5 character long',
        //             'max_length' => 'Password cannot be longer than 15 characters',
        //             'matches' => 'Confirm Password must be match the password',
        //         ],
        //     ],
        // ]);

        // if(!$validated){
        //     return view('http://localhost:3000/register', ['validation' => $this->validator]);
        // }

        $uname = $this->request->getVar('uname');
        $email = $this->request->getVar('email');
        $password = $this->request->getVar('password');
        $cpassword = $this->request->getVar('cpassword');

        $data = [
            'uname' => $uname,
            'email' => $email,
            'password' => Hash::encrypt($password),
            'cpassword' => $cpassword
        ];

        $userModel = new \App\Models\UserModel();
        $query = $userModel->save($data);

        if(!$query){
            return redirect()->back()->with('fail', 'Saving user failed');
        }else {
            return redirect()->back()->with('success', 'Registered Successfully');
        }
    }
}

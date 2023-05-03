<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Users extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 5,
                'auto_increment' => true,
            ],
            'uname' => [
                'type' => 'VARCHAR',
                'constraint' => 200,
            ],
            'email' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'password' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'cpassword' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],

        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('users');
    }
    // php spark migrate
    // php spark make:model "name of model here"

    public function down()
    {
        //
    }
}

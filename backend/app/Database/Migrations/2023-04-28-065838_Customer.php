<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Customer extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 5,
                'auto_increment' => true,
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => 200,
            ],
            'age' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'gender' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'contact_num' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],

        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('customer');
    }
    // php spark migrate
    // php spark make:model "name of model here"

    public function down()
    {
        //
    }
}

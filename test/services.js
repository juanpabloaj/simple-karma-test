describe('Users', function(){

  beforeEach(module('factories'));

  var users;

  beforeEach(inject(function(_Users_){
    users = _Users_;
  }));

  it('empty users length 0', function(){
    expect(users.all().length).toBe(0);
  });

  it('One user return length 1', function(){
    users.add({name:'user name'});

    expect(users.all().length).toBe(1);
  });
});

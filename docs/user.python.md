# `okta_user`

Refer to the Terraform Registory for docs: [`okta_user`](https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-okta.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-okta.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.User.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user

user.User(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  first_name: str,
  last_name: str,
  login: str,
  city: str = None,
  cost_center: str = None,
  country_code: str = None,
  custom_profile_attributes: str = None,
  custom_profile_attributes_to_ignore: typing.List[str] = None,
  department: str = None,
  display_name: str = None,
  division: str = None,
  employee_number: str = None,
  expire_password_on_create: typing.Union[bool, IResolvable] = None,
  honorific_prefix: str = None,
  honorific_suffix: str = None,
  id: str = None,
  locale: str = None,
  manager: str = None,
  manager_id: str = None,
  middle_name: str = None,
  mobile_phone: str = None,
  nick_name: str = None,
  old_password: str = None,
  organization: str = None,
  password: str = None,
  password_hash: UserPasswordHash = None,
  password_inline_hook: str = None,
  postal_address: str = None,
  preferred_language: str = None,
  primary_phone: str = None,
  profile_url: str = None,
  recovery_answer: str = None,
  recovery_question: str = None,
  second_email: str = None,
  skip_roles: typing.Union[bool, IResolvable] = None,
  state: str = None,
  status: str = None,
  street_address: str = None,
  timezone: str = None,
  title: str = None,
  user_type: str = None,
  zip_code: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.email">email</a></code> | <code>str</code> | User primary email address. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | User first name. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | User last name. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.login">login</a></code> | <code>str</code> | User Okta login. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.city">city</a></code> | <code>str</code> | User city. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.costCenter">cost_center</a></code> | <code>str</code> | User cost center. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.countryCode">country_code</a></code> | <code>str</code> | User country code. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.customProfileAttributes">custom_profile_attributes</a></code> | <code>str</code> | JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.customProfileAttributesToIgnore">custom_profile_attributes_to_ignore</a></code> | <code>typing.List[str]</code> | List of custom_profile_attribute keys that should be excluded from being managed by Terraform. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.department">department</a></code> | <code>str</code> | User department. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User display name, suitable to show end users. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.division">division</a></code> | <code>str</code> | User division. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.employeeNumber">employee_number</a></code> | <code>str</code> | User employee number. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.expirePasswordOnCreate">expire_password_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the user will have to change the password at the next login. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | User honorific prefix. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | User honorific suffix. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.locale">locale</a></code> | <code>str</code> | User default location. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.manager">manager</a></code> | <code>str</code> | Manager of User. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.managerId">manager_id</a></code> | <code>str</code> | Manager ID of User. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.middleName">middle_name</a></code> | <code>str</code> | User middle name. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.mobilePhone">mobile_phone</a></code> | <code>str</code> | User mobile phone number. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.nickName">nick_name</a></code> | <code>str</code> | User nickname. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.oldPassword">old_password</a></code> | <code>str</code> | Old User Password. Should be only set in case the password was not changed using the provider. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.organization">organization</a></code> | <code>str</code> | User organization. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.password">password</a></code> | <code>str</code> | User Password. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.passwordHash">password_hash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | password_hash block. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.passwordInlineHook">password_inline_hook</a></code> | <code>str</code> | When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.postalAddress">postal_address</a></code> | <code>str</code> | User mailing address. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.preferredLanguage">preferred_language</a></code> | <code>str</code> | User preferred language. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.primaryPhone">primary_phone</a></code> | <code>str</code> | User primary phone number. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.profileUrl">profile_url</a></code> | <code>str</code> | User online profile (web page). |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.recoveryAnswer">recovery_answer</a></code> | <code>str</code> | User Password Recovery Answer. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.recoveryQuestion">recovery_question</a></code> | <code>str</code> | User Password Recovery Question. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.secondEmail">second_email</a></code> | <code>str</code> | User secondary email address, used for account recovery. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.skipRoles">skip_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.state">state</a></code> | <code>str</code> | User state or region. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the User in Okta - remove to set user back to active/provisioned. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.streetAddress">street_address</a></code> | <code>str</code> | User street address. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | User default timezone. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.title">title</a></code> | <code>str</code> | User title. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | User employee type. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.zipCode">zip_code</a></code> | <code>str</code> | User zipcode or postal code. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.user.User.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.user.User.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.user.User.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.user.User.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.user.User.Initializer.parameter.email"></a>

- *Type:* str

User primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#email User#email}

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-okta.user.User.Initializer.parameter.firstName"></a>

- *Type:* str

User first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#first_name User#first_name}

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-okta.user.User.Initializer.parameter.lastName"></a>

- *Type:* str

User last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#last_name User#last_name}

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.user.User.Initializer.parameter.login"></a>

- *Type:* str

User Okta login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#login User#login}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-okta.user.User.Initializer.parameter.city"></a>

- *Type:* str

User city.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#city User#city}

---

##### `cost_center`<sup>Optional</sup> <a name="cost_center" id="@cdktf/provider-okta.user.User.Initializer.parameter.costCenter"></a>

- *Type:* str

User cost center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#cost_center User#cost_center}

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-okta.user.User.Initializer.parameter.countryCode"></a>

- *Type:* str

User country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#country_code User#country_code}

---

##### `custom_profile_attributes`<sup>Optional</sup> <a name="custom_profile_attributes" id="@cdktf/provider-okta.user.User.Initializer.parameter.customProfileAttributes"></a>

- *Type:* str

JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#custom_profile_attributes User#custom_profile_attributes}

---

##### `custom_profile_attributes_to_ignore`<sup>Optional</sup> <a name="custom_profile_attributes_to_ignore" id="@cdktf/provider-okta.user.User.Initializer.parameter.customProfileAttributesToIgnore"></a>

- *Type:* typing.List[str]

List of custom_profile_attribute keys that should be excluded from being managed by Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#custom_profile_attributes_to_ignore User#custom_profile_attributes_to_ignore}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-okta.user.User.Initializer.parameter.department"></a>

- *Type:* str

User department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#department User#department}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-okta.user.User.Initializer.parameter.displayName"></a>

- *Type:* str

User display name, suitable to show end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#display_name User#display_name}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-okta.user.User.Initializer.parameter.division"></a>

- *Type:* str

User division.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#division User#division}

---

##### `employee_number`<sup>Optional</sup> <a name="employee_number" id="@cdktf/provider-okta.user.User.Initializer.parameter.employeeNumber"></a>

- *Type:* str

User employee number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#employee_number User#employee_number}

---

##### `expire_password_on_create`<sup>Optional</sup> <a name="expire_password_on_create" id="@cdktf/provider-okta.user.User.Initializer.parameter.expirePasswordOnCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the user will have to change the password at the next login.

This property will be used when user is being created and works only when `password` field is set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#expire_password_on_create User#expire_password_on_create}

---

##### `honorific_prefix`<sup>Optional</sup> <a name="honorific_prefix" id="@cdktf/provider-okta.user.User.Initializer.parameter.honorificPrefix"></a>

- *Type:* str

User honorific prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#honorific_prefix User#honorific_prefix}

---

##### `honorific_suffix`<sup>Optional</sup> <a name="honorific_suffix" id="@cdktf/provider-okta.user.User.Initializer.parameter.honorificSuffix"></a>

- *Type:* str

User honorific suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#honorific_suffix User#honorific_suffix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.user.User.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-okta.user.User.Initializer.parameter.locale"></a>

- *Type:* str

User default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#locale User#locale}

---

##### `manager`<sup>Optional</sup> <a name="manager" id="@cdktf/provider-okta.user.User.Initializer.parameter.manager"></a>

- *Type:* str

Manager of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#manager User#manager}

---

##### `manager_id`<sup>Optional</sup> <a name="manager_id" id="@cdktf/provider-okta.user.User.Initializer.parameter.managerId"></a>

- *Type:* str

Manager ID of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#manager_id User#manager_id}

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktf/provider-okta.user.User.Initializer.parameter.middleName"></a>

- *Type:* str

User middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#middle_name User#middle_name}

---

##### `mobile_phone`<sup>Optional</sup> <a name="mobile_phone" id="@cdktf/provider-okta.user.User.Initializer.parameter.mobilePhone"></a>

- *Type:* str

User mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `nick_name`<sup>Optional</sup> <a name="nick_name" id="@cdktf/provider-okta.user.User.Initializer.parameter.nickName"></a>

- *Type:* str

User nickname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#nick_name User#nick_name}

---

##### `old_password`<sup>Optional</sup> <a name="old_password" id="@cdktf/provider-okta.user.User.Initializer.parameter.oldPassword"></a>

- *Type:* str

Old User Password. Should be only set in case the password was not changed using the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#old_password User#old_password}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-okta.user.User.Initializer.parameter.organization"></a>

- *Type:* str

User organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#organization User#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.user.User.Initializer.parameter.password"></a>

- *Type:* str

User Password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#password User#password}

---

##### `password_hash`<sup>Optional</sup> <a name="password_hash" id="@cdktf/provider-okta.user.User.Initializer.parameter.passwordHash"></a>

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

password_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#password_hash User#password_hash}

---

##### `password_inline_hook`<sup>Optional</sup> <a name="password_inline_hook" id="@cdktf/provider-okta.user.User.Initializer.parameter.passwordInlineHook"></a>

- *Type:* str

When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#password_inline_hook User#password_inline_hook}

---

##### `postal_address`<sup>Optional</sup> <a name="postal_address" id="@cdktf/provider-okta.user.User.Initializer.parameter.postalAddress"></a>

- *Type:* str

User mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#postal_address User#postal_address}

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktf/provider-okta.user.User.Initializer.parameter.preferredLanguage"></a>

- *Type:* str

User preferred language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `primary_phone`<sup>Optional</sup> <a name="primary_phone" id="@cdktf/provider-okta.user.User.Initializer.parameter.primaryPhone"></a>

- *Type:* str

User primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#primary_phone User#primary_phone}

---

##### `profile_url`<sup>Optional</sup> <a name="profile_url" id="@cdktf/provider-okta.user.User.Initializer.parameter.profileUrl"></a>

- *Type:* str

User online profile (web page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#profile_url User#profile_url}

---

##### `recovery_answer`<sup>Optional</sup> <a name="recovery_answer" id="@cdktf/provider-okta.user.User.Initializer.parameter.recoveryAnswer"></a>

- *Type:* str

User Password Recovery Answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#recovery_answer User#recovery_answer}

---

##### `recovery_question`<sup>Optional</sup> <a name="recovery_question" id="@cdktf/provider-okta.user.User.Initializer.parameter.recoveryQuestion"></a>

- *Type:* str

User Password Recovery Question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#recovery_question User#recovery_question}

---

##### `second_email`<sup>Optional</sup> <a name="second_email" id="@cdktf/provider-okta.user.User.Initializer.parameter.secondEmail"></a>

- *Type:* str

User secondary email address, used for account recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#second_email User#second_email}

---

##### `skip_roles`<sup>Optional</sup> <a name="skip_roles" id="@cdktf/provider-okta.user.User.Initializer.parameter.skipRoles"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#skip_roles User#skip_roles}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-okta.user.User.Initializer.parameter.state"></a>

- *Type:* str

User state or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#state User#state}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.user.User.Initializer.parameter.status"></a>

- *Type:* str

The status of the User in Okta - remove to set user back to active/provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#status User#status}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-okta.user.User.Initializer.parameter.streetAddress"></a>

- *Type:* str

User street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#street_address User#street_address}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-okta.user.User.Initializer.parameter.timezone"></a>

- *Type:* str

User default timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#timezone User#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-okta.user.User.Initializer.parameter.title"></a>

- *Type:* str

User title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#title User#title}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.user.User.Initializer.parameter.userType"></a>

- *Type:* str

User employee type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#user_type User#user_type}

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-okta.user.User.Initializer.parameter.zipCode"></a>

- *Type:* str

User zipcode or postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#zip_code User#zip_code}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.user.User.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.user.User.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.user.User.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.user.User.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.user.User.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.user.User.putPasswordHash">put_password_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCostCenter">reset_cost_center</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCustomProfileAttributes">reset_custom_profile_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCustomProfileAttributesToIgnore">reset_custom_profile_attributes_to_ignore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDepartment">reset_department</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDivision">reset_division</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetEmployeeNumber">reset_employee_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetExpirePasswordOnCreate">reset_expire_password_on_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetHonorificPrefix">reset_honorific_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetHonorificSuffix">reset_honorific_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetLocale">reset_locale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetManager">reset_manager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetManagerId">reset_manager_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetMiddleName">reset_middle_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetMobilePhone">reset_mobile_phone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetNickName">reset_nick_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetOldPassword">reset_old_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPasswordHash">reset_password_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPasswordInlineHook">reset_password_inline_hook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPostalAddress">reset_postal_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPreferredLanguage">reset_preferred_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPrimaryPhone">reset_primary_phone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetProfileUrl">reset_profile_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetRecoveryAnswer">reset_recovery_answer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetRecoveryQuestion">reset_recovery_question</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetSecondEmail">reset_second_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetSkipRoles">reset_skip_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetStreetAddress">reset_street_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetUserType">reset_user_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetZipCode">reset_zip_code</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.user.User.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.user.User.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.user.User.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.User.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.user.User.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.user.User.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.user.User.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.user.User.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.user.User.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.user.User.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.user.User.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.user.User.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.user.User.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.user.User.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.user.User.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_password_hash` <a name="put_password_hash" id="@cdktf/provider-okta.user.User.putPasswordHash"></a>

```python
def put_password_hash(
  algorithm: str,
  value: str,
  salt: str = None,
  salt_order: str = None,
  work_factor: typing.Union[int, float] = None
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-okta.user.User.putPasswordHash.parameter.algorithm"></a>

- *Type:* str

The algorithm used to generate the hash using the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#algorithm User#algorithm}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.User.putPasswordHash.parameter.value"></a>

- *Type:* str

For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used).

This is the Base64 encoded value of the SHA-512/SHA-256/SHA-1/MD5 digest that was computed by either pre-fixing or post-fixing the salt to the password, depending on the saltOrder. If a salt was not used in the source system, then this should just be the the Base64 encoded value of the password's SHA-512/SHA-256/SHA-1/MD5 digest. For BCRYPT, This is the actual radix64-encoded hashed password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#value User#value}

---

###### `salt`<sup>Optional</sup> <a name="salt" id="@cdktf/provider-okta.user.User.putPasswordHash.parameter.salt"></a>

- *Type:* str

Only required for salted hashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#salt User#salt}

---

###### `salt_order`<sup>Optional</sup> <a name="salt_order" id="@cdktf/provider-okta.user.User.putPasswordHash.parameter.saltOrder"></a>

- *Type:* str

Specifies whether salt was pre- or postfixed to the password before hashing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#salt_order User#salt_order}

---

###### `work_factor`<sup>Optional</sup> <a name="work_factor" id="@cdktf/provider-okta.user.User.putPasswordHash.parameter.workFactor"></a>

- *Type:* typing.Union[int, float]

Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#work_factor User#work_factor}

---

##### `reset_city` <a name="reset_city" id="@cdktf/provider-okta.user.User.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_cost_center` <a name="reset_cost_center" id="@cdktf/provider-okta.user.User.resetCostCenter"></a>

```python
def reset_cost_center() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-okta.user.User.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_custom_profile_attributes` <a name="reset_custom_profile_attributes" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributes"></a>

```python
def reset_custom_profile_attributes() -> None
```

##### `reset_custom_profile_attributes_to_ignore` <a name="reset_custom_profile_attributes_to_ignore" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributesToIgnore"></a>

```python
def reset_custom_profile_attributes_to_ignore() -> None
```

##### `reset_department` <a name="reset_department" id="@cdktf/provider-okta.user.User.resetDepartment"></a>

```python
def reset_department() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-okta.user.User.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_division` <a name="reset_division" id="@cdktf/provider-okta.user.User.resetDivision"></a>

```python
def reset_division() -> None
```

##### `reset_employee_number` <a name="reset_employee_number" id="@cdktf/provider-okta.user.User.resetEmployeeNumber"></a>

```python
def reset_employee_number() -> None
```

##### `reset_expire_password_on_create` <a name="reset_expire_password_on_create" id="@cdktf/provider-okta.user.User.resetExpirePasswordOnCreate"></a>

```python
def reset_expire_password_on_create() -> None
```

##### `reset_honorific_prefix` <a name="reset_honorific_prefix" id="@cdktf/provider-okta.user.User.resetHonorificPrefix"></a>

```python
def reset_honorific_prefix() -> None
```

##### `reset_honorific_suffix` <a name="reset_honorific_suffix" id="@cdktf/provider-okta.user.User.resetHonorificSuffix"></a>

```python
def reset_honorific_suffix() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.user.User.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_locale` <a name="reset_locale" id="@cdktf/provider-okta.user.User.resetLocale"></a>

```python
def reset_locale() -> None
```

##### `reset_manager` <a name="reset_manager" id="@cdktf/provider-okta.user.User.resetManager"></a>

```python
def reset_manager() -> None
```

##### `reset_manager_id` <a name="reset_manager_id" id="@cdktf/provider-okta.user.User.resetManagerId"></a>

```python
def reset_manager_id() -> None
```

##### `reset_middle_name` <a name="reset_middle_name" id="@cdktf/provider-okta.user.User.resetMiddleName"></a>

```python
def reset_middle_name() -> None
```

##### `reset_mobile_phone` <a name="reset_mobile_phone" id="@cdktf/provider-okta.user.User.resetMobilePhone"></a>

```python
def reset_mobile_phone() -> None
```

##### `reset_nick_name` <a name="reset_nick_name" id="@cdktf/provider-okta.user.User.resetNickName"></a>

```python
def reset_nick_name() -> None
```

##### `reset_old_password` <a name="reset_old_password" id="@cdktf/provider-okta.user.User.resetOldPassword"></a>

```python
def reset_old_password() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-okta.user.User.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-okta.user.User.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_password_hash` <a name="reset_password_hash" id="@cdktf/provider-okta.user.User.resetPasswordHash"></a>

```python
def reset_password_hash() -> None
```

##### `reset_password_inline_hook` <a name="reset_password_inline_hook" id="@cdktf/provider-okta.user.User.resetPasswordInlineHook"></a>

```python
def reset_password_inline_hook() -> None
```

##### `reset_postal_address` <a name="reset_postal_address" id="@cdktf/provider-okta.user.User.resetPostalAddress"></a>

```python
def reset_postal_address() -> None
```

##### `reset_preferred_language` <a name="reset_preferred_language" id="@cdktf/provider-okta.user.User.resetPreferredLanguage"></a>

```python
def reset_preferred_language() -> None
```

##### `reset_primary_phone` <a name="reset_primary_phone" id="@cdktf/provider-okta.user.User.resetPrimaryPhone"></a>

```python
def reset_primary_phone() -> None
```

##### `reset_profile_url` <a name="reset_profile_url" id="@cdktf/provider-okta.user.User.resetProfileUrl"></a>

```python
def reset_profile_url() -> None
```

##### `reset_recovery_answer` <a name="reset_recovery_answer" id="@cdktf/provider-okta.user.User.resetRecoveryAnswer"></a>

```python
def reset_recovery_answer() -> None
```

##### `reset_recovery_question` <a name="reset_recovery_question" id="@cdktf/provider-okta.user.User.resetRecoveryQuestion"></a>

```python
def reset_recovery_question() -> None
```

##### `reset_second_email` <a name="reset_second_email" id="@cdktf/provider-okta.user.User.resetSecondEmail"></a>

```python
def reset_second_email() -> None
```

##### `reset_skip_roles` <a name="reset_skip_roles" id="@cdktf/provider-okta.user.User.resetSkipRoles"></a>

```python
def reset_skip_roles() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-okta.user.User.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.user.User.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-okta.user.User.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-okta.user.User.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-okta.user.User.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="@cdktf/provider-okta.user.User.resetUserType"></a>

```python
def reset_user_type() -> None
```

##### `reset_zip_code` <a name="reset_zip_code" id="@cdktf/provider-okta.user.User.resetZipCode"></a>

```python
def reset_zip_code() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.user.User.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import user

user.User.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.user.User.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import user

user.User.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.user.User.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import user

user.User.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.user.User.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import user

user.User.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the User to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.user.User.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHash">password_hash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.rawStatus">raw_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenterInput">cost_center_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesInput">custom_profile_attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput">custom_profile_attributes_to_ignore_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.departmentInput">department_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.divisionInput">division_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumberInput">employee_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput">expire_password_on_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefixInput">honorific_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffixInput">honorific_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.loginInput">login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerIdInput">manager_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerInput">manager_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleNameInput">middle_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhoneInput">mobile_phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickNameInput">nick_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPasswordInput">old_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHashInput">password_hash_input</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHookInput">password_inline_hook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddressInput">postal_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguageInput">preferred_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhoneInput">primary_phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrlInput">profile_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswerInput">recovery_answer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestionInput">recovery_question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmailInput">second_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRolesInput">skip_roles_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddressInput">street_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCodeInput">zip_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenter">cost_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributes">custom_profile_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore">custom_profile_attributes_to_ignore</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.department">department</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.division">division</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumber">employee_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreate">expire_password_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.manager">manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerId">manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhone">mobile_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickName">nick_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPassword">old_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHook">password_inline_hook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddress">postal_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhone">primary_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswer">recovery_answer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestion">recovery_question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmail">second_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRoles">skip_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userType">user_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.user.User.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.user.User.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.user.User.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.user.User.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.user.User.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.user.User.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.user.User.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.user.User.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.user.User.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.user.User.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.user.User.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.user.User.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `password_hash`<sup>Required</sup> <a name="password_hash" id="@cdktf/provider-okta.user.User.property.passwordHash"></a>

```python
password_hash: UserPasswordHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a>

---

##### `raw_status`<sup>Required</sup> <a name="raw_status" id="@cdktf/provider-okta.user.User.property.rawStatus"></a>

```python
raw_status: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-okta.user.User.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `cost_center_input`<sup>Optional</sup> <a name="cost_center_input" id="@cdktf/provider-okta.user.User.property.costCenterInput"></a>

```python
cost_center_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-okta.user.User.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `custom_profile_attributes_input`<sup>Optional</sup> <a name="custom_profile_attributes_input" id="@cdktf/provider-okta.user.User.property.customProfileAttributesInput"></a>

```python
custom_profile_attributes_input: str
```

- *Type:* str

---

##### `custom_profile_attributes_to_ignore_input`<sup>Optional</sup> <a name="custom_profile_attributes_to_ignore_input" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput"></a>

```python
custom_profile_attributes_to_ignore_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `department_input`<sup>Optional</sup> <a name="department_input" id="@cdktf/provider-okta.user.User.property.departmentInput"></a>

```python
department_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-okta.user.User.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `division_input`<sup>Optional</sup> <a name="division_input" id="@cdktf/provider-okta.user.User.property.divisionInput"></a>

```python
division_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-okta.user.User.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `employee_number_input`<sup>Optional</sup> <a name="employee_number_input" id="@cdktf/provider-okta.user.User.property.employeeNumberInput"></a>

```python
employee_number_input: str
```

- *Type:* str

---

##### `expire_password_on_create_input`<sup>Optional</sup> <a name="expire_password_on_create_input" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput"></a>

```python
expire_password_on_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-okta.user.User.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `honorific_prefix_input`<sup>Optional</sup> <a name="honorific_prefix_input" id="@cdktf/provider-okta.user.User.property.honorificPrefixInput"></a>

```python
honorific_prefix_input: str
```

- *Type:* str

---

##### `honorific_suffix_input`<sup>Optional</sup> <a name="honorific_suffix_input" id="@cdktf/provider-okta.user.User.property.honorificSuffixInput"></a>

```python
honorific_suffix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.user.User.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-okta.user.User.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="@cdktf/provider-okta.user.User.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-okta.user.User.property.loginInput"></a>

```python
login_input: str
```

- *Type:* str

---

##### `manager_id_input`<sup>Optional</sup> <a name="manager_id_input" id="@cdktf/provider-okta.user.User.property.managerIdInput"></a>

```python
manager_id_input: str
```

- *Type:* str

---

##### `manager_input`<sup>Optional</sup> <a name="manager_input" id="@cdktf/provider-okta.user.User.property.managerInput"></a>

```python
manager_input: str
```

- *Type:* str

---

##### `middle_name_input`<sup>Optional</sup> <a name="middle_name_input" id="@cdktf/provider-okta.user.User.property.middleNameInput"></a>

```python
middle_name_input: str
```

- *Type:* str

---

##### `mobile_phone_input`<sup>Optional</sup> <a name="mobile_phone_input" id="@cdktf/provider-okta.user.User.property.mobilePhoneInput"></a>

```python
mobile_phone_input: str
```

- *Type:* str

---

##### `nick_name_input`<sup>Optional</sup> <a name="nick_name_input" id="@cdktf/provider-okta.user.User.property.nickNameInput"></a>

```python
nick_name_input: str
```

- *Type:* str

---

##### `old_password_input`<sup>Optional</sup> <a name="old_password_input" id="@cdktf/provider-okta.user.User.property.oldPasswordInput"></a>

```python
old_password_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-okta.user.User.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `password_hash_input`<sup>Optional</sup> <a name="password_hash_input" id="@cdktf/provider-okta.user.User.property.passwordHashInput"></a>

```python
password_hash_input: UserPasswordHash
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---

##### `password_inline_hook_input`<sup>Optional</sup> <a name="password_inline_hook_input" id="@cdktf/provider-okta.user.User.property.passwordInlineHookInput"></a>

```python
password_inline_hook_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-okta.user.User.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `postal_address_input`<sup>Optional</sup> <a name="postal_address_input" id="@cdktf/provider-okta.user.User.property.postalAddressInput"></a>

```python
postal_address_input: str
```

- *Type:* str

---

##### `preferred_language_input`<sup>Optional</sup> <a name="preferred_language_input" id="@cdktf/provider-okta.user.User.property.preferredLanguageInput"></a>

```python
preferred_language_input: str
```

- *Type:* str

---

##### `primary_phone_input`<sup>Optional</sup> <a name="primary_phone_input" id="@cdktf/provider-okta.user.User.property.primaryPhoneInput"></a>

```python
primary_phone_input: str
```

- *Type:* str

---

##### `profile_url_input`<sup>Optional</sup> <a name="profile_url_input" id="@cdktf/provider-okta.user.User.property.profileUrlInput"></a>

```python
profile_url_input: str
```

- *Type:* str

---

##### `recovery_answer_input`<sup>Optional</sup> <a name="recovery_answer_input" id="@cdktf/provider-okta.user.User.property.recoveryAnswerInput"></a>

```python
recovery_answer_input: str
```

- *Type:* str

---

##### `recovery_question_input`<sup>Optional</sup> <a name="recovery_question_input" id="@cdktf/provider-okta.user.User.property.recoveryQuestionInput"></a>

```python
recovery_question_input: str
```

- *Type:* str

---

##### `second_email_input`<sup>Optional</sup> <a name="second_email_input" id="@cdktf/provider-okta.user.User.property.secondEmailInput"></a>

```python
second_email_input: str
```

- *Type:* str

---

##### `skip_roles_input`<sup>Optional</sup> <a name="skip_roles_input" id="@cdktf/provider-okta.user.User.property.skipRolesInput"></a>

```python
skip_roles_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-okta.user.User.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.user.User.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-okta.user.User.property.streetAddressInput"></a>

```python
street_address_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-okta.user.User.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.user.User.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="@cdktf/provider-okta.user.User.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `zip_code_input`<sup>Optional</sup> <a name="zip_code_input" id="@cdktf/provider-okta.user.User.property.zipCodeInput"></a>

```python
zip_code_input: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.user.User.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `cost_center`<sup>Required</sup> <a name="cost_center" id="@cdktf/provider-okta.user.User.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-okta.user.User.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `custom_profile_attributes`<sup>Required</sup> <a name="custom_profile_attributes" id="@cdktf/provider-okta.user.User.property.customProfileAttributes"></a>

```python
custom_profile_attributes: str
```

- *Type:* str

---

##### `custom_profile_attributes_to_ignore`<sup>Required</sup> <a name="custom_profile_attributes_to_ignore" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore"></a>

```python
custom_profile_attributes_to_ignore: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-okta.user.User.property.department"></a>

```python
department: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-okta.user.User.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-okta.user.User.property.division"></a>

```python
division: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.user.User.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `employee_number`<sup>Required</sup> <a name="employee_number" id="@cdktf/provider-okta.user.User.property.employeeNumber"></a>

```python
employee_number: str
```

- *Type:* str

---

##### `expire_password_on_create`<sup>Required</sup> <a name="expire_password_on_create" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreate"></a>

```python
expire_password_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-okta.user.User.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `honorific_prefix`<sup>Required</sup> <a name="honorific_prefix" id="@cdktf/provider-okta.user.User.property.honorificPrefix"></a>

```python
honorific_prefix: str
```

- *Type:* str

---

##### `honorific_suffix`<sup>Required</sup> <a name="honorific_suffix" id="@cdktf/provider-okta.user.User.property.honorificSuffix"></a>

```python
honorific_suffix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-okta.user.User.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.user.User.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.user.User.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `manager`<sup>Required</sup> <a name="manager" id="@cdktf/provider-okta.user.User.property.manager"></a>

```python
manager: str
```

- *Type:* str

---

##### `manager_id`<sup>Required</sup> <a name="manager_id" id="@cdktf/provider-okta.user.User.property.managerId"></a>

```python
manager_id: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="@cdktf/provider-okta.user.User.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `mobile_phone`<sup>Required</sup> <a name="mobile_phone" id="@cdktf/provider-okta.user.User.property.mobilePhone"></a>

```python
mobile_phone: str
```

- *Type:* str

---

##### `nick_name`<sup>Required</sup> <a name="nick_name" id="@cdktf/provider-okta.user.User.property.nickName"></a>

```python
nick_name: str
```

- *Type:* str

---

##### `old_password`<sup>Required</sup> <a name="old_password" id="@cdktf/provider-okta.user.User.property.oldPassword"></a>

```python
old_password: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-okta.user.User.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.user.User.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_inline_hook`<sup>Required</sup> <a name="password_inline_hook" id="@cdktf/provider-okta.user.User.property.passwordInlineHook"></a>

```python
password_inline_hook: str
```

- *Type:* str

---

##### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-okta.user.User.property.postalAddress"></a>

```python
postal_address: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-okta.user.User.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `primary_phone`<sup>Required</sup> <a name="primary_phone" id="@cdktf/provider-okta.user.User.property.primaryPhone"></a>

```python
primary_phone: str
```

- *Type:* str

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="@cdktf/provider-okta.user.User.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `recovery_answer`<sup>Required</sup> <a name="recovery_answer" id="@cdktf/provider-okta.user.User.property.recoveryAnswer"></a>

```python
recovery_answer: str
```

- *Type:* str

---

##### `recovery_question`<sup>Required</sup> <a name="recovery_question" id="@cdktf/provider-okta.user.User.property.recoveryQuestion"></a>

```python
recovery_question: str
```

- *Type:* str

---

##### `second_email`<sup>Required</sup> <a name="second_email" id="@cdktf/provider-okta.user.User.property.secondEmail"></a>

```python
second_email: str
```

- *Type:* str

---

##### `skip_roles`<sup>Required</sup> <a name="skip_roles" id="@cdktf/provider-okta.user.User.property.skipRoles"></a>

```python
skip_roles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.user.User.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.user.User.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-okta.user.User.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-okta.user.User.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.user.User.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-okta.user.User.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-okta.user.User.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.user.User.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-okta.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user

user.UserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  first_name: str,
  last_name: str,
  login: str,
  city: str = None,
  cost_center: str = None,
  country_code: str = None,
  custom_profile_attributes: str = None,
  custom_profile_attributes_to_ignore: typing.List[str] = None,
  department: str = None,
  display_name: str = None,
  division: str = None,
  employee_number: str = None,
  expire_password_on_create: typing.Union[bool, IResolvable] = None,
  honorific_prefix: str = None,
  honorific_suffix: str = None,
  id: str = None,
  locale: str = None,
  manager: str = None,
  manager_id: str = None,
  middle_name: str = None,
  mobile_phone: str = None,
  nick_name: str = None,
  old_password: str = None,
  organization: str = None,
  password: str = None,
  password_hash: UserPasswordHash = None,
  password_inline_hook: str = None,
  postal_address: str = None,
  preferred_language: str = None,
  primary_phone: str = None,
  profile_url: str = None,
  recovery_answer: str = None,
  recovery_question: str = None,
  second_email: str = None,
  skip_roles: typing.Union[bool, IResolvable] = None,
  state: str = None,
  status: str = None,
  street_address: str = None,
  timezone: str = None,
  title: str = None,
  user_type: str = None,
  zip_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.email">email</a></code> | <code>str</code> | User primary email address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.firstName">first_name</a></code> | <code>str</code> | User first name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lastName">last_name</a></code> | <code>str</code> | User last name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.login">login</a></code> | <code>str</code> | User Okta login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.city">city</a></code> | <code>str</code> | User city. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.costCenter">cost_center</a></code> | <code>str</code> | User cost center. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.countryCode">country_code</a></code> | <code>str</code> | User country code. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes">custom_profile_attributes</a></code> | <code>str</code> | JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore">custom_profile_attributes_to_ignore</a></code> | <code>typing.List[str]</code> | List of custom_profile_attribute keys that should be excluded from being managed by Terraform. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.department">department</a></code> | <code>str</code> | User department. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.displayName">display_name</a></code> | <code>str</code> | User display name, suitable to show end users. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.division">division</a></code> | <code>str</code> | User division. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.employeeNumber">employee_number</a></code> | <code>str</code> | User employee number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate">expire_password_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the user will have to change the password at the next login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | User honorific prefix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | User honorific suffix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.locale">locale</a></code> | <code>str</code> | User default location. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.manager">manager</a></code> | <code>str</code> | Manager of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.managerId">manager_id</a></code> | <code>str</code> | Manager ID of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.middleName">middle_name</a></code> | <code>str</code> | User middle name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.mobilePhone">mobile_phone</a></code> | <code>str</code> | User mobile phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.nickName">nick_name</a></code> | <code>str</code> | User nickname. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.oldPassword">old_password</a></code> | <code>str</code> | Old User Password. Should be only set in case the password was not changed using the provider. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.organization">organization</a></code> | <code>str</code> | User organization. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.password">password</a></code> | <code>str</code> | User Password. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordHash">password_hash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | password_hash block. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook">password_inline_hook</a></code> | <code>str</code> | When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.postalAddress">postal_address</a></code> | <code>str</code> | User mailing address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | User preferred language. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.primaryPhone">primary_phone</a></code> | <code>str</code> | User primary phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.profileUrl">profile_url</a></code> | <code>str</code> | User online profile (web page). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer">recovery_answer</a></code> | <code>str</code> | User Password Recovery Answer. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion">recovery_question</a></code> | <code>str</code> | User Password Recovery Question. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.secondEmail">second_email</a></code> | <code>str</code> | User secondary email address, used for account recovery. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.skipRoles">skip_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.state">state</a></code> | <code>str</code> | User state or region. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.status">status</a></code> | <code>str</code> | The status of the User in Okta - remove to set user back to active/provisioned. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.streetAddress">street_address</a></code> | <code>str</code> | User street address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.timezone">timezone</a></code> | <code>str</code> | User default timezone. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.title">title</a></code> | <code>str</code> | User title. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.userType">user_type</a></code> | <code>str</code> | User employee type. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.zipCode">zip_code</a></code> | <code>str</code> | User zipcode or postal code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.user.UserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.user.UserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.user.UserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.user.UserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.user.UserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.UserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.user.UserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.user.UserConfig.property.email"></a>

```python
email: str
```

- *Type:* str

User primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#email User#email}

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-okta.user.UserConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

User first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#first_name User#first_name}

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-okta.user.UserConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

User last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#last_name User#last_name}

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.user.UserConfig.property.login"></a>

```python
login: str
```

- *Type:* str

User Okta login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#login User#login}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-okta.user.UserConfig.property.city"></a>

```python
city: str
```

- *Type:* str

User city.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#city User#city}

---

##### `cost_center`<sup>Optional</sup> <a name="cost_center" id="@cdktf/provider-okta.user.UserConfig.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

User cost center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#cost_center User#cost_center}

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-okta.user.UserConfig.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

User country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#country_code User#country_code}

---

##### `custom_profile_attributes`<sup>Optional</sup> <a name="custom_profile_attributes" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes"></a>

```python
custom_profile_attributes: str
```

- *Type:* str

JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#custom_profile_attributes User#custom_profile_attributes}

---

##### `custom_profile_attributes_to_ignore`<sup>Optional</sup> <a name="custom_profile_attributes_to_ignore" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore"></a>

```python
custom_profile_attributes_to_ignore: typing.List[str]
```

- *Type:* typing.List[str]

List of custom_profile_attribute keys that should be excluded from being managed by Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#custom_profile_attributes_to_ignore User#custom_profile_attributes_to_ignore}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-okta.user.UserConfig.property.department"></a>

```python
department: str
```

- *Type:* str

User department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#department User#department}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-okta.user.UserConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User display name, suitable to show end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#display_name User#display_name}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-okta.user.UserConfig.property.division"></a>

```python
division: str
```

- *Type:* str

User division.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#division User#division}

---

##### `employee_number`<sup>Optional</sup> <a name="employee_number" id="@cdktf/provider-okta.user.UserConfig.property.employeeNumber"></a>

```python
employee_number: str
```

- *Type:* str

User employee number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#employee_number User#employee_number}

---

##### `expire_password_on_create`<sup>Optional</sup> <a name="expire_password_on_create" id="@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate"></a>

```python
expire_password_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the user will have to change the password at the next login.

This property will be used when user is being created and works only when `password` field is set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#expire_password_on_create User#expire_password_on_create}

---

##### `honorific_prefix`<sup>Optional</sup> <a name="honorific_prefix" id="@cdktf/provider-okta.user.UserConfig.property.honorificPrefix"></a>

```python
honorific_prefix: str
```

- *Type:* str

User honorific prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#honorific_prefix User#honorific_prefix}

---

##### `honorific_suffix`<sup>Optional</sup> <a name="honorific_suffix" id="@cdktf/provider-okta.user.UserConfig.property.honorificSuffix"></a>

```python
honorific_suffix: str
```

- *Type:* str

User honorific suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#honorific_suffix User#honorific_suffix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.user.UserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-okta.user.UserConfig.property.locale"></a>

```python
locale: str
```

- *Type:* str

User default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#locale User#locale}

---

##### `manager`<sup>Optional</sup> <a name="manager" id="@cdktf/provider-okta.user.UserConfig.property.manager"></a>

```python
manager: str
```

- *Type:* str

Manager of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#manager User#manager}

---

##### `manager_id`<sup>Optional</sup> <a name="manager_id" id="@cdktf/provider-okta.user.UserConfig.property.managerId"></a>

```python
manager_id: str
```

- *Type:* str

Manager ID of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#manager_id User#manager_id}

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktf/provider-okta.user.UserConfig.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

User middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#middle_name User#middle_name}

---

##### `mobile_phone`<sup>Optional</sup> <a name="mobile_phone" id="@cdktf/provider-okta.user.UserConfig.property.mobilePhone"></a>

```python
mobile_phone: str
```

- *Type:* str

User mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `nick_name`<sup>Optional</sup> <a name="nick_name" id="@cdktf/provider-okta.user.UserConfig.property.nickName"></a>

```python
nick_name: str
```

- *Type:* str

User nickname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#nick_name User#nick_name}

---

##### `old_password`<sup>Optional</sup> <a name="old_password" id="@cdktf/provider-okta.user.UserConfig.property.oldPassword"></a>

```python
old_password: str
```

- *Type:* str

Old User Password. Should be only set in case the password was not changed using the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#old_password User#old_password}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-okta.user.UserConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

User organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#organization User#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.user.UserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

User Password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#password User#password}

---

##### `password_hash`<sup>Optional</sup> <a name="password_hash" id="@cdktf/provider-okta.user.UserConfig.property.passwordHash"></a>

```python
password_hash: UserPasswordHash
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

password_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#password_hash User#password_hash}

---

##### `password_inline_hook`<sup>Optional</sup> <a name="password_inline_hook" id="@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook"></a>

```python
password_inline_hook: str
```

- *Type:* str

When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#password_inline_hook User#password_inline_hook}

---

##### `postal_address`<sup>Optional</sup> <a name="postal_address" id="@cdktf/provider-okta.user.UserConfig.property.postalAddress"></a>

```python
postal_address: str
```

- *Type:* str

User mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#postal_address User#postal_address}

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktf/provider-okta.user.UserConfig.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

User preferred language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `primary_phone`<sup>Optional</sup> <a name="primary_phone" id="@cdktf/provider-okta.user.UserConfig.property.primaryPhone"></a>

```python
primary_phone: str
```

- *Type:* str

User primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#primary_phone User#primary_phone}

---

##### `profile_url`<sup>Optional</sup> <a name="profile_url" id="@cdktf/provider-okta.user.UserConfig.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

User online profile (web page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#profile_url User#profile_url}

---

##### `recovery_answer`<sup>Optional</sup> <a name="recovery_answer" id="@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer"></a>

```python
recovery_answer: str
```

- *Type:* str

User Password Recovery Answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#recovery_answer User#recovery_answer}

---

##### `recovery_question`<sup>Optional</sup> <a name="recovery_question" id="@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion"></a>

```python
recovery_question: str
```

- *Type:* str

User Password Recovery Question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#recovery_question User#recovery_question}

---

##### `second_email`<sup>Optional</sup> <a name="second_email" id="@cdktf/provider-okta.user.UserConfig.property.secondEmail"></a>

```python
second_email: str
```

- *Type:* str

User secondary email address, used for account recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#second_email User#second_email}

---

##### `skip_roles`<sup>Optional</sup> <a name="skip_roles" id="@cdktf/provider-okta.user.UserConfig.property.skipRoles"></a>

```python
skip_roles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#skip_roles User#skip_roles}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-okta.user.UserConfig.property.state"></a>

```python
state: str
```

- *Type:* str

User state or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#state User#state}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.user.UserConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the User in Okta - remove to set user back to active/provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#status User#status}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-okta.user.UserConfig.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

User street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#street_address User#street_address}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-okta.user.UserConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

User default timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#timezone User#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-okta.user.UserConfig.property.title"></a>

```python
title: str
```

- *Type:* str

User title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#title User#title}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.user.UserConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

User employee type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#user_type User#user_type}

---

##### `zip_code`<sup>Optional</sup> <a name="zip_code" id="@cdktf/provider-okta.user.UserConfig.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

User zipcode or postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#zip_code User#zip_code}

---

### UserPasswordHash <a name="UserPasswordHash" id="@cdktf/provider-okta.user.UserPasswordHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserPasswordHash.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user

user.UserPasswordHash(
  algorithm: str,
  value: str,
  salt: str = None,
  salt_order: str = None,
  work_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.algorithm">algorithm</a></code> | <code>str</code> | The algorithm used to generate the hash using the password. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.value">value</a></code> | <code>str</code> | For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used). |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.salt">salt</a></code> | <code>str</code> | Only required for salted hashes. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder">salt_order</a></code> | <code>str</code> | Specifies whether salt was pre- or postfixed to the password before hashing. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.workFactor">work_factor</a></code> | <code>typing.Union[int, float]</code> | Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-okta.user.UserPasswordHash.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

The algorithm used to generate the hash using the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#algorithm User#algorithm}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.UserPasswordHash.property.value"></a>

```python
value: str
```

- *Type:* str

For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used).

This is the Base64 encoded value of the SHA-512/SHA-256/SHA-1/MD5 digest that was computed by either pre-fixing or post-fixing the salt to the password, depending on the saltOrder. If a salt was not used in the source system, then this should just be the the Base64 encoded value of the password's SHA-512/SHA-256/SHA-1/MD5 digest. For BCRYPT, This is the actual radix64-encoded hashed password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#value User#value}

---

##### `salt`<sup>Optional</sup> <a name="salt" id="@cdktf/provider-okta.user.UserPasswordHash.property.salt"></a>

```python
salt: str
```

- *Type:* str

Only required for salted hashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#salt User#salt}

---

##### `salt_order`<sup>Optional</sup> <a name="salt_order" id="@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder"></a>

```python
salt_order: str
```

- *Type:* str

Specifies whether salt was pre- or postfixed to the password before hashing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#salt_order User#salt_order}

---

##### `work_factor`<sup>Optional</sup> <a name="work_factor" id="@cdktf/provider-okta.user.UserPasswordHash.property.workFactor"></a>

```python
work_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.5.0/docs/resources/user#work_factor User#work_factor}

---

## Classes <a name="Classes" id="Classes"></a>

### UserPasswordHashOutputReference <a name="UserPasswordHashOutputReference" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user

user.UserPasswordHashOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSalt">reset_salt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSaltOrder">reset_salt_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetWorkFactor">reset_work_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_salt` <a name="reset_salt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSalt"></a>

```python
def reset_salt() -> None
```

##### `reset_salt_order` <a name="reset_salt_order" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSaltOrder"></a>

```python
def reset_salt_order() -> None
```

##### `reset_work_factor` <a name="reset_work_factor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetWorkFactor"></a>

```python
def reset_work_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput">salt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput">salt_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput">work_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt">salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder">salt_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor">work_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `salt_input`<sup>Optional</sup> <a name="salt_input" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput"></a>

```python
salt_input: str
```

- *Type:* str

---

##### `salt_order_input`<sup>Optional</sup> <a name="salt_order_input" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput"></a>

```python
salt_order_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `work_factor_input`<sup>Optional</sup> <a name="work_factor_input" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput"></a>

```python
work_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `salt`<sup>Required</sup> <a name="salt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt"></a>

```python
salt: str
```

- *Type:* str

---

##### `salt_order`<sup>Required</sup> <a name="salt_order" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder"></a>

```python
salt_order: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `work_factor`<sup>Required</sup> <a name="work_factor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor"></a>

```python
work_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue"></a>

```python
internal_value: UserPasswordHash
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---




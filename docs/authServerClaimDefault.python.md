# `okta_auth_server_claim_default`

Refer to the Terraform Registory for docs: [`okta_auth_server_claim_default`](https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default).

# `authServerClaimDefault` Submodule <a name="`authServerClaimDefault` Submodule" id="@cdktf/provider-okta.authServerClaimDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerClaimDefault <a name="AuthServerClaimDefault" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default okta_auth_server_claim_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim_default

authServerClaimDefault.AuthServerClaimDefault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_server_id: str,
  name: str,
  always_include_in_token: typing.Union[bool, IResolvable] = None,
  id: str = None,
  value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.authServerId">auth_server_id</a></code> | <code>str</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.name">name</a></code> | <code>str</code> | Default auth server claim name. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.alwaysIncludeInToken">always_include_in_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#always_include_in_token AuthServerClaimDefault#always_include_in_token}. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#id AuthServerClaimDefault#id}. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#value AuthServerClaimDefault#value}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.authServerId"></a>

- *Type:* str

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#auth_server_id AuthServerClaimDefault#auth_server_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.name"></a>

- *Type:* str

Default auth server claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#name AuthServerClaimDefault#name}

---

##### `always_include_in_token`<sup>Optional</sup> <a name="always_include_in_token" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.alwaysIncludeInToken"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#always_include_in_token AuthServerClaimDefault#always_include_in_token}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#id AuthServerClaimDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.Initializer.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#value AuthServerClaimDefault#value}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.resetAlwaysIncludeInToken">reset_always_include_in_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.resetValue">reset_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_always_include_in_token` <a name="reset_always_include_in_token" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.resetAlwaysIncludeInToken"></a>

```python
def reset_always_include_in_token() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.resetValue"></a>

```python
def reset_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim_default

authServerClaimDefault.AuthServerClaimDefault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim_default

authServerClaimDefault.AuthServerClaimDefault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim_default

authServerClaimDefault.AuthServerClaimDefault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.claimType">claim_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.alwaysIncludeInTokenInput">always_include_in_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.authServerIdInput">auth_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.alwaysIncludeInToken">always_include_in_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.authServerId">auth_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `claim_type`<sup>Required</sup> <a name="claim_type" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.claimType"></a>

```python
claim_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `always_include_in_token_input`<sup>Optional</sup> <a name="always_include_in_token_input" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.alwaysIncludeInTokenInput"></a>

```python
always_include_in_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_server_id_input`<sup>Optional</sup> <a name="auth_server_id_input" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.authServerIdInput"></a>

```python
auth_server_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `always_include_in_token`<sup>Required</sup> <a name="always_include_in_token" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.alwaysIncludeInToken"></a>

```python
always_include_in_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerClaimDefaultConfig <a name="AuthServerClaimDefaultConfig" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim_default

authServerClaimDefault.AuthServerClaimDefaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_server_id: str,
  name: str,
  always_include_in_token: typing.Union[bool, IResolvable] = None,
  id: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.authServerId">auth_server_id</a></code> | <code>str</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.name">name</a></code> | <code>str</code> | Default auth server claim name. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.alwaysIncludeInToken">always_include_in_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#always_include_in_token AuthServerClaimDefault#always_include_in_token}. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#id AuthServerClaimDefault#id}. |
| <code><a href="#@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#value AuthServerClaimDefault#value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#auth_server_id AuthServerClaimDefault#auth_server_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Default auth server claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#name AuthServerClaimDefault#name}

---

##### `always_include_in_token`<sup>Optional</sup> <a name="always_include_in_token" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.alwaysIncludeInToken"></a>

```python
always_include_in_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#always_include_in_token AuthServerClaimDefault#always_include_in_token}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#id AuthServerClaimDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.authServerClaimDefault.AuthServerClaimDefaultConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/auth_server_claim_default#value AuthServerClaimDefault#value}.

---




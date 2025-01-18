# `dataOktaIdpOidc` Submodule <a name="`dataOktaIdpOidc` Submodule" id="@cdktf/provider-okta.dataOktaIdpOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaIdpOidc <a name="DataOktaIdpOidc" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/idp_oidc okta_idp_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_oidc

dataOktaIdpOidc.DataOktaIdpOidc(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.id">id</a></code> | <code>str</code> | Id of idp. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the idp. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.id"></a>

- *Type:* str

Id of idp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/idp_oidc#id DataOktaIdpOidc#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.Initializer.parameter.name"></a>

- *Type:* str

Name of the idp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/idp_oidc#name DataOktaIdpOidc#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOktaIdpOidc resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_oidc

dataOktaIdpOidc.DataOktaIdpOidc.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_oidc

dataOktaIdpOidc.DataOktaIdpOidc.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_oidc

dataOktaIdpOidc.DataOktaIdpOidc.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_oidc

dataOktaIdpOidc.DataOktaIdpOidc.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOktaIdpOidc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOktaIdpOidc to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOktaIdpOidc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/idp_oidc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaIdpOidc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.authorizationBinding">authorization_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.jwksBinding">jwks_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.jwksUrl">jwks_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.tokenBinding">token_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.userInfoBinding">user_info_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.userInfoUrl">user_info_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authorization_binding`<sup>Required</sup> <a name="authorization_binding" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.authorizationBinding"></a>

```python
authorization_binding: str
```

- *Type:* str

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `jwks_binding`<sup>Required</sup> <a name="jwks_binding" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.jwksBinding"></a>

```python
jwks_binding: str
```

- *Type:* str

---

##### `jwks_url`<sup>Required</sup> <a name="jwks_url" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.jwksUrl"></a>

```python
jwks_url: str
```

- *Type:* str

---

##### `max_clock_skew`<sup>Required</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_binding`<sup>Required</sup> <a name="token_binding" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.tokenBinding"></a>

```python
token_binding: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_info_binding`<sup>Required</sup> <a name="user_info_binding" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.userInfoBinding"></a>

```python
user_info_binding: str
```

- *Type:* str

---

##### `user_info_url`<sup>Required</sup> <a name="user_info_url" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.userInfoUrl"></a>

```python
user_info_url: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidc.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaIdpOidcConfig <a name="DataOktaIdpOidcConfig" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_oidc

dataOktaIdpOidc.DataOktaIdpOidcConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.id">id</a></code> | <code>str</code> | Id of idp. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.name">name</a></code> | <code>str</code> | Name of the idp. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Id of idp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/idp_oidc#id DataOktaIdpOidc#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaIdpOidc.DataOktaIdpOidcConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the idp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/idp_oidc#name DataOktaIdpOidc#name}

---



